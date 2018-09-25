const body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';

const grid = document.querySelector('#grid');
grid.style.margin = '0';
grid.style.padding = '0';
grid.width= window.innerWidth - 20;

var inGrid = 16;

const button = document.createElement('button');
button.style.position = 'fixed';
button.style.right = (window.innerWidth - 20)/2 +'px';
button.style.bottom = '50px';
button.textContent = 'Reset';
button.addEventListener('click', reset);
grid.appendChild(button);

function changeColor(e) {
    document.getElementById(e.target.id).classList.remove('gridBox');
}

function reset() {
    console.log('caller');
    var boxNum = 1;
    for (var vert = 1; vert <= inGrid;  vert++) {
        for (var horiz = 1; horiz <= inGrid; horiz++){
            const b = document.getElementById('box' + boxNum);
            grid.removeChild(b);
            boxNum++;
        }
    } 
    inGrid = prompt('How big is the grid?');
    createGrid();
    console.log('called');
}

function createGrid(){
    const hw = (window.innerWidth - 20)/inGrid;
    var boxNum = 1;
    for (var vert = 1; vert <= inGrid;  vert++) {
        for (var horiz = 1; horiz <= inGrid; horiz++){
            console.log(boxNum);
            const box = document.createElement('div');
            box.classList.add('gridBox');
            box.setAttribute('id', 'box'+boxNum)
            box.style.height = hw + 'px'; 
            box.style.width = hw + 'px';
            box.style.display = 'inline-block';
            box.addEventListener('mouseover', changeColor)
            grid.appendChild(box);
            boxNum++;
        }
    }
    console.log('grid Made');
}


window.onload = createGrid;