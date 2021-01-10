const Player_One = 'X';
const Player_Two = 'O';


class TicTacToe {
  
  handleSquareClick(event){
    
  }

  executeMove(moveIndex){
    if(this.board[moveIndex] == ""){
      this.board[moveIndex] = this.currentPlayer;
      this.updateBoard();

      if(!this.gameWinner()){
        this.currentPlayer = (this.currentPlayer == Player_One ? Player_Two  : Player_One);
      }
      else{
        alert("Player" + this.currentPlayer + "Wins");
        this.start();
      }
    }
  }

  updateBoard(){
    let gameBoard = document.getElementById('gameBoard');
    let squareElements = gameBoard.childNodes;
    squareElements.forEach((element, index) => {
      if(element.innerText != this.board[index]){
        element.innerText = THIS.board[index];

      }
    });
  }

  gameWinner (){
    const winningCombo = [
      [0,1,2], [3,4,5], [6,7,8], // hori
      [0,3,6], [1,4,7], [2,5,8], // vert
      [0,4,8], [2,4,6] // dia
    ];
    return winningCombo.find(combo => {
      if(this.board[combo[0]] != "" && this.board[combo[1]] != "" && this.board[combo[2]] != "" && this.board[combo[0]] == this.board[combo[1]] && this.board[combo[1]] == this.board[combo[2]])
        return true;
      else
        return false;
      
    });
  }

  drawBoard(){
    document.body.innerHTML = "";
    let gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board');
    gameBoard.addEventListener('click', this.handleSquareClick.bind(this));
   
    this.board.forEach((square, index) =>{
      let squareElement = document.createElement('div');
      squareElement.id = index;
      squareElement.classList.add('square');
      gameBoard.appendChild(squareElement);

    });
    document.body.appendChild(gameBoard);
  } 

  start(){
    this.board = ["","","",
                  "","","",
                  "","",""];
    this.currentPlayer = Player_One;
    this.drawBoard();
  }
}
const game = new TicTacToe();
game.start();