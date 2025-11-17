// Objects that I need to create: a gameboard IIFE, displayController IIFE, players factory function

// Gameboard functions: Assign sign to player, update state of the game.
// Player can contain: name, sign, number of wins

gameboard = (function (){
    const board = Array(9).fill('');
    console.log(board);

    gameState = 'Going';
    playerX = null;
    playerO = null;

    const startGame = function(){
        
        // const board = Array(9).fill('E');
        // gameState = 'Going';

        // assignSigns
    }

    const updateState = function(playerSign, position) {
        board[position] = playerSign;
        CheckState();
    }

    const assignSigns = function(player1, player2){
        playerX = player1;
        playerO = player2;
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
        }
        else{
            console.log("O has won")
            playerO.incrementWin();
        }
    }


    return {updateState, assignSigns};
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
player2 = player('moto');

gameboard.assignSigns(player1, player2);
gameboard.updateState('E', 0);
