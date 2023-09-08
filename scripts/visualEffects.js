const cellElementsArray = Array.from(document.querySelector('.board').children);

const cellElements = [];

cellElementsArray.forEach(element => {
  cellElements.push({element, isSet: false}); 
  });

console.log(cellElements);

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
    if (!cellElements[i].isSet) {
      console.log('clicked');
      cellElements[i].element.innerHTML = `<img src="images/${marker[playerMarker]}.png">`;
      cellElements[i].isSet = true;
    }
  })
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
    console.log(playerMarker + ' ' + compMarker);
  })
})




