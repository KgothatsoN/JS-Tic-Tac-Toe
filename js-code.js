const Player_One = 'X';
const Player_Two = 'O';


class TicTacToe {
  
  handleSquareClick(event){
    
  }

  executeMove(moveIndex){
    if(this.board[moveIndex] == ""){
      this.board[moveIndex] = this.currentPlayer;
      this.currentPlayer = (this.currentPlayer == Player_One ? Player_Two  : Player_One);
    }
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