const board = ['', '', '', '', '', '', '', '', ''];

let isGameOver = false;

function playGame() {
  let gameState = isOver(playerMarker);
  if (gameState === 1 || gameState === 0) {
    isGameOver = true;
    displayResults(gameState, playerMarker);
  }
  else {
    playCompMove();
    gameState = isOver(compMarker);
    if (gameState === 1) {
      isGameOver = true;
      setTimeout(() => {
        displayResults(gameState, compMarker);
      }, 200);
    }
  }
}

function displayResults(result, marker) {

  let resultElement = document.querySelector('.results-container p');

  if (result === 1 && marker === playerMarker) {
    resultElement.innerText = 'You Win!';
  }
  else if (result === 1 && marker === compMarker) {
    resultElement.innerText = 'Computer Wins!';
  }
  else if (result === 0)
  resultElement.innerText = 'It\'s a Draw!';
  
  resultElement = resultElement.parentNode;
  resultElement.classList.remove('hide-display');
  document.querySelector('.board').classList.add('translate-left');
  resultElement.classList.add('fadeIn')
  resultElement.classList.add('translate-up');
}

function playCompMove() {
  let bestMoveIndex;
  let bestMove = -Infinity;
  
  for (let i = 0; i < board.length; i++) {
    
    if (board[i] !== '')  continue;

    board[i] = compMarker;
    const score = miniMax(false); 
    board[i] = '';
    if (score > bestMove) {
      bestMove = score;
      bestMoveIndex = i;
    }
  }
  putMarkerDown(compMarker, bestMoveIndex);
}

/*
@param marker
@return Number
*/

function isOver(marker) {

  //Checking rows and columns
  for (let i = 0; i < 3; i++) {
    if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== '') {
      if (board[i] === marker) 
        return 1;
      return -1;
    } 
    if (board[(i * 3)] === board[(i * 3) + 1] && board[(i * 3) + 1] === board[(i * 3) + 2] && board[(i * 3)] !== '') {
      if (board[i * 3] === marker)
        return 1;
      return -1;
    }
  }

  //Checking diagonals
  if ((board[0] === board[4] && board[0] === board[8] && board[0] !== '') || (board[2] === board[4] && board[2] === board[6] && board[4] !== '')) {
    if (board[4] === marker)
        return 1;
      return -1;
  }

  //Checking for draw
  let emptySpaces = 0;
  for (let i = 0; i < 9; i++) {
    if (board[i] === '')  emptySpaces++;
  }

  if(emptySpaces === 0)
    return 0;

  return -2;
}

function miniMax(isMaximisingStep){
  
  const isGameOver = isOver(compMarker);
  if (isGameOver === 1 || isGameOver == -1 || isGameOver === 0) {
    return isGameOver;
  }

  let bestScore;

  for (let i = 0; i < board.length; i++) {
    
    if (board[i] !== '')  continue;

    if (isMaximisingStep === false) {

      if (bestScore === undefined) {
        bestScore = Infinity;
      }
      board[i] = playerMarker;
      const score = miniMax(!isMaximisingStep);
      board[i] = '';

      bestScore = Math.min(bestScore, score);
    }
    else {

      if (bestScore === undefined) {
        bestScore = -Infinity;
      }
      board[i] = compMarker;
      const score = miniMax(!isMaximisingStep);
      board[i] = '';

      bestScore = Math.max(bestScore, score);
    }
  }

  return bestScore;
}