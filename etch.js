let container = document.querySelector("#container");
let cellsNumber = 16;

const squareLengthPixels = 700;

let container_inner = document.createElement('div');

resetBoard(cellsNumber);

container.appendChild(container_inner);

function changeColor(element, newColor) {
    // newColor = rgb(,Math.floor(Math.random*256),Math.floor(Math.random*256));
    element.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    //setAttribute('style', `background-color: rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256),1})`);
}

function resetBoard(newCellsNumber) {
    cellsNumber = newCellsNumber;
    //Delete all childs 
    while (container_inner.firstChild) {
        container_inner.removeChild(container_inner.firstChild);
    }

    //Set attributes of a new grid
    container_inner.setAttribute('style', 
    ` margin: auto; display: grid; width: 700px; height: 700px;
    grid-template-columns: repeat(${newCellsNumber},1fr)`);

    //Create all new cells
    for (i = 0; i < newCellsNumber ** 2; i++)
    {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', `min-height: ${squareLengthPixels/newCellsNumber - newCellsNumber - 1}px; min-width: ${squareLengthPixels/newCellsNumber - newCellsNumber - 1}px;`);
        cell.addEventListener('mouseover', () => {changeColor(cell, "white")});
        container_inner.appendChild(cell);
    }
}

// if (resetButton !== null)  
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', () => {
        resetBoard(+prompt('Number of cells in row/column?', cellsNumber));
    });