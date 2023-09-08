const cellElementsArray = Array.from(document.querySelector('.board').children);

const cellElements = [];

cellElementsArray.forEach(element => {
  cellElements.push({element, isSet: false}); 
});

console.log(cellElements);

for(let i = 0; i < cellElements.length; i++) {
  cellElements[i].element.addEventListener('mouseenter', () => {
    if (!cellElements[i].isSet)
      cellElements[i].element.innerHTML = `<img class='imghover' src="images/circle.png">`;
  })

  cellElements[i].element.addEventListener('mouseleave', () => {
    if (!cellElements[i].isSet)
      cellElements[i].element.innerHTML = '';
  })

  cellElements[i].element.addEventListener('click', () => {
    if (!cellElements[i].isSet) {
      console.log('clicked');
      cellElements[i].element.innerHTML = `<img src="images/circle.png">`;
      cellElements[i].isSet = true;
    }
  })
}

