const cellElementsArray = Array.from(document.querySelector('.board').children);

const cellElements = [];

cellElementsArray.forEach(element => {
  cellElements.push({element, isSet: false}); 
  });

for(let i = 0; i < cellElements.length; i++) {
  cellElements[i].element.addEventListener('mouseenter', () => {
    if (!cellElements[i].isSet)
      cellElements[i].element.innerHTML = `<img class='imghover' src="images/${marker[playerMarker]}.png">`;
  })

  cellElements[i].element.addEventListener('mouseleave', () => {
    if (!cellElements[i].isSet)
      cellElements[i].element.innerHTML = '';
  })

  cellElements[i].element.addEventListener('click', () => {
    putMarkerDown(playerMarker, i);
    setTimeout(() => {
      playGame();
    }, 200);
  })
}

function putMarkerDown(playerMarker, index) {
  if (!cellElements[index].isSet) {
    cellElements[index].element.innerHTML = `<img 
    class='setimg' src="images/${marker[playerMarker]}.png">`;
    cellElements[index].isSet = true;
    board[index] = playerMarker;
  }
}

let playerMarker, compMarker;
const marker = ['cross', 'circle']

const markerElementsArray = Array.from(document.querySelector('.chooseMarker').children).filter(element => {
  return (element.tagName !== 'H1');
});

markerElementsArray.forEach((element, index) => {
  element.addEventListener('click', () => {
    document.querySelector('.chooseMarker').classList.add('hidden');
    playerMarker = index;
    compMarker = Number(!index);
    setTimeout(() => {
      document.querySelector('.chooseMarker').classList.add('hide-display');
      document.querySelector('.board').classList.remove('hidden');  
    }, 400);
  })
});
