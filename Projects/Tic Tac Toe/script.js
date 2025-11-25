// Objects that I need to create: a gameboard IIFE, displayController IIFE, players factory function

// Gameboard functions: Assign sign to player, update state of the game.
// Player can contain: name, sign, number of wins

var events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function(eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};

gameboard = (function (){
    const gameBoard = document.querySelector('.game-board');
    updateBoard = function(e){
        updateState(e.target.id[1]);
    }
    gameBoard.addEventListener('click', updateBoard);

    const startGame = function(player1, player2){
        board = Array(9).fill('');
        playerSign = 'O';

        playerX = player1;
        playerO = player2;
        events.emit('GameStart');
    }

    const updateState = function(position) {
        position = parseInt(position);
        
        if (board[position] == ''){
            board[position] = playerSign;
            events.emit('BoardUpdate', {position, playerSign});
            // displayController.update(position, playerSign);
            CheckState();
        }
        else{
            throw new Error("This position is occupied");
        }

        console.log("I got here")

        if (playerSign === 'O'){
            playerSign = 'X'
        }
        else{
            playerSign = 'O'
        }
    }

    const CheckState = function(){
        if (board[0] === board[4] && board[4] === board[8] && board[0].length !== 0){
            declareWinner(board[0]);
            return;
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[2].length !== 0){
            declareWinner(board[2]);
            return;
        }
        else{
            for (let i = 0; i < 3; i++){
                if(board[0 + (i * 3)] === board[1 + (i * 3)] && board[1 + (i * 3)] === board[2 + (i * 3)] && board[0 + (i * 3)].length !== 0){
                    declareWinner(board[0 + (i * 3)]);
                    return;
                }
            }
            for (let i = 0; i < 3; i++){
                if(board[0 + i] === board[3 + i] && board[3 + i] === board[6 + i] && board[0 + i].length !== 0){
                    declareWinner(board[0 + i]);
                    return;
                }
            }
        }

        noEmpty = true;
        for (var i = 0; i < board.length; i++){
            if (board[i] === ''){
                console.log(board[i], i, board);
                noEmpty = false;
            }
        }
        if(noEmpty){
            alert("Tie");
            events.emit("GameStateChanged", {playerX, playerO});
            startGame(playerX, playerO);
        }

        
    }

    const declareWinner = function(sign){
        if (sign == 'X'){
            alert("X has won");
            playerX.incrementWin();
            events.emit("GameStateChanged", {playerX, playerO});
            startGame(playerX, playerO);
        }
        else{
            alert("O has won");
            playerO.incrementWin();
            events.emit("GameStateChanged", {playerX, playerO});
            startGame(playerX, playerO);
        }
    }

    return {updateState, startGame};
})();

displayController = (function(){
    // restart, update, displayWinner, displayScore,
    const defaultState = `
        <div id="g0"></div>
        <div id="g1"></div>
        <div id="g2"></div>
        <div id="g3"></div>
        <div id="g4"></div>
        <div id="g5"></div>
        <div id="g6"></div>
        <div id="g7"></div>
        <div id="g8"></div>`
    const displayBoard = document.querySelector('.game-board');
    const playerScore1 = document.querySelector('#player1-score');
    const playerScore2 = document.querySelector('#player2-score');

    events.on('BoardUpdate', update);
    events.on('GameStart', restart);
    events.on('GameStateChanged', refreshScore);

    function restart(){
        displayBoard.innerHTML = defaultState;
    }

    function update(data){
        target = document.querySelector(`#g${data.position}`);
        target.textContent = data.playerSign;
    }

    function refreshScore(players){
        playerScore1.textContent = players.playerX.returnWin();
        playerScore2.textContent = players.playerO.returnWin();
        restart();
    }
})();

function player(name){
    let playerName = name;
    let wins = 0;
    
    const incrementWin = function(){
        wins += 1;
    }

    const returnWin = function(){
        return wins;
    }

    return {incrementWin, returnWin}
}

player1 = player('Saka');
player2 = player('Moto');

gameboard.startGame(player1, player2);

// displayController.restart();



// // displayController.update(3, 'X');
// // displayController.update(4, 'O');
// // displayController.update(5, 'X');
// // displayController.update(1, 'X');
// // displayController.update(2, 'O');
// // displayController.update(6, 'X');
// // displayController.update(7, 'X');
// // displayController.update(8, 'O');
// // displayController.update(9, 'X');

// displayController.refreshScore(player1, player2);

// player1.incrementWin();
// player2.incrementWin();
// player2.incrementWin();
// // player1.incrementWin();

// displayController.refreshScore(player1, player2);


// Link the display with the game board to update content that way.
// Make A simple design for the game that contain the game board and the score of the two players.