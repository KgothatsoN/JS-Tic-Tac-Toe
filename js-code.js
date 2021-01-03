class GameBoard {

  drawBoard(){
    document.body.innerHTML = "";
    let gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board');

    this.board.forEach((square, index)) => {
      let squareElement = document.createElement('div');
      squareElement.id = index;
      squareElement.classList.add('square');
      gameBoard.appendChild(squareElement);
    }
  }
  begin(){
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.drawBoard();
  }


}