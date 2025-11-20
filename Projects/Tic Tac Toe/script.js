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
    playerX = null;
    playerO = null;

    const startGame = function(player1, player2){
        board = Array(9).fill('');
        gameState = 'Going';
        last_play = '';

        playerX = player1;
        playerO = player2;
    }

    const updateState = function(playerSign, position) {
        if (last_play != playerSign){
            if (board[position] === ''){
                last_play = playerSign;
                board[position] = playerSign;
                console.log(board);
                CheckState();
            }
            else{
                throw new Error("This position is occupied");
            }
        }
        else{
            throw new Error("The same player tried to play twice");
        }
    }

    const CheckState = function(){
        if (board[0] === board[4] && board[4] === board[8] && board[0].length !== 0){
            declareWinner(board[0]);
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[2].length !== 0){
            declareWinner(board[2]);
        }
        else{
            for (let i = 0; i < 3; i++){
                if(board[0 + (i * 3)] === board[1 + (i * 3)] && board[1 + (i * 3)] === board[2 + (i * 3)] && board[0 + (i * 3)].length !== 0){
                    declareWinner(board[0 + (i * 3)]);
                }
            }
            for (let i = 0; i < 3; i++){
                if(board[0 + i] === board[3 + i] && board[3 + i] === board[6 + i] && board[0 + i].length !== 0){
                    declareWinner(board[0 + i]);
                }
            }
        }
    }

    const declareWinner = function(sign){
        if (sign == 'X'){
            console.log("X has won");
            playerX.incrementWin();
            events.emit("GameStateChange", 'Completed')
        }
        else{
            console.log("O has won")
            playerO.incrementWin();
            events.emit("GameStateChange", 'Completed')
        }
    }

    return {updateState, startGame};
})();

displayController = (function(){
    // restart, update, displayWinner, displayScore,
    const defaultState = `
        <div id="g1"></div>
        <div id="g2"></div>
        <div id="g3"></div>
        <div id="g4"></div>
        <div id="g5"></div>
        <div id="g6"></div>
        <div id="g7"></div>
        <div id="g8"></div>
        <div id="g9"></div>`
    const displayBoard = document.querySelector('.game-board');
    

    const restart = function(){
        displayBoard.innerHTML = defaultState;
    }

    const update = function(id, sign){
        target = document.querySelector(`#g${id}`);
        target.textContent = sign;
    }

    return {restart, update}
})();

function player(name){
    playerName = name;
    playerID = crypto.randomUUID();
    wins = 0;
    
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

displayController.restart();
displayController.update(3, 'X');
displayController.update(4, 'O');
displayController.update(5, 'X');

// Link the display with the game board to update content that way.
// Make A simple design for the game that contain the game board and the score of the two players.