const gridButton = document.getElementById('gridButton');
const inputField = document.getElementById('inputField');
const gridContainer = document.querySelector('.grid');

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createSquare(rowLength) {
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');
  newSquare.setAttribute('style', `width:${(1/rowLength)*100}%; height:${(1/rowLength)*100}%`);
  gridContainer.appendChild(newSquare);
}

function createGrid(input) {
  resetGrid();
  let rowLength = Math.floor(input);
  if (rowLength <= 0) {
    rowLength = 8;
  } else if (rowLength >= 100) {
    rowLength = 100;
  } else if (typeof(rowLength) !== "number") {
    rowLength = 8;
  };
  for (let i=0; i<(rowLength*rowLength); i++) {
    createSquare(rowLength);
  };
}

function changeColor(event) {
  const hoveredSquare = event.target;
  if (!hoveredSquare.classList.contains('changed')){
    hoveredSquare.classList.add('changed');
  };
  /* if (hoveredSquare.) */
}

createGrid(8);
gridButton.addEventListener('click', () => {createGrid(inputField.value)});
gridContainer.addEventListener('mouseover', changeColor)