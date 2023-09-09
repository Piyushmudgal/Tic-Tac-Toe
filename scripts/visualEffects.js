const cellElements = Array.from(document.querySelector('.board').children);

for(let i = 0; i < cellElements.length; i++) {
  cellElements[i].addEventListener('mouseenter', () => {
    if (board[i] === '' && !isGameOver)
      cellElements[i].innerHTML = `<img class='imghover' src="images/${marker[playerMarker]}.png">`;
  })

  cellElements[i].addEventListener('mouseleave', () => {
    if (board[i] === '' && !isGameOver)
      cellElements[i].innerHTML = '';
  })

  cellElements[i].addEventListener('click', () => {
    if (board[i] === '' && !isGameOver) {
      putMarkerDown(playerMarker, i);
      setTimeout(() => {
        playGame();
      }, 200);
    }
  })
}

function putMarkerDown(playerMarker, index) {
  cellElements[index].innerHTML = `<img 
  class='setimg' src="images/${marker[playerMarker]}.png">`;
  board[index] = playerMarker;
}

let playerMarker, compMarker;
const marker = ['cross', 'circle']

const markerElementsArray = Array.from(document.querySelector('.chooseMarker').children);

markerElementsArray.forEach((element, index) => {
  element.addEventListener('click', () => {
    document.querySelector('.chooseMarker-container').classList.add('hidden');
    playerMarker = index;
    compMarker = Number(!index);
    setTimeout(() => {
      document.querySelector('.chooseMarker-container').classList.add('hide-display');
      document.querySelector('.board').classList.remove('hide-display');  
    }, 400);
  })
});

const resetButtonElement = document.querySelector('.reset-button');

resetButtonElement.addEventListener('click', () => {
  playerMarker = compMarker = undefined;
  isGameOver = false;
  for(let i = 0; i < board.length; i++) board[i] = '';
  console.log(board);
  cellElements.forEach(element => { element.innerHTML = '' });
  document.querySelector('.board').classList.add('hidden');
  document.querySelector('.results-container').classList.add('hidden');
    setTimeout(() => {
      document.querySelector('.board').classList.add('hide-display');
      document.querySelector('.results-container').classList.add('hide-display');
      document.querySelector('.results-container').classList.remove('hidden');
      document.querySelector('.board').classList.remove('hidden', 'translate-left');
      document.querySelector('.chooseMarker-container').classList.remove('hide-display', 'hidden');  
    }, 400)
})