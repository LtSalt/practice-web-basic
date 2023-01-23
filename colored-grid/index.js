function createGrid() {
    const gridContainer = document.querySelector('#grid-container');
    const gridItemTemplate = document.createElement('div');
    gridItemTemplate.classList.add('grid-item');
    
    for(let i = 0; i < 500; i++) {
        const gridItem = gridItemTemplate.cloneNode();
        gridContainer.appendChild(gridItem);
    }   
}

createGrid();

function colorSquare(e) {
    const gridItem = e.target;

    if(gridItem.classList.contains('grid-item')) {
        colors = ['red', 'blue', 'green', 'orange', 'purple'];
        randomId = Math.floor(Math.random() * 4);
        gridItem.classList.add('colored', colors[randomId])
    }
}

function dimSquare(e) {
    const gridItem = e.target;

    if(gridItem.classList.contains('grid-item')) {
        gridItem.className = 'grid-item'
    }
}

function prepareLightshow() {
    const gridContainer = document.querySelector('#grid-container');
    gridContainer.addEventListener('mouseover', colorSquare);
    gridContainer.addEventListener('mouseout', dimSquare);

}

prepareLightshow();

