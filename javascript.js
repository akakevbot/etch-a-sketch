const body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';

const grid = document.querySelector('#grid');
grid.style.margin = '0';
grid.style.padding = '0';

const hw = (window.innerWidth - 20)/16;



function createGrid(){
    for (var vert = 1; vert <= 16;  vert++) {
        if (vert >1){
            const brk = document.createElement('br');
            grid.appendChild(brk);
        }
        for (var horiz = 1; horiz <= 16; horiz++){
            const box = document.createElement('div');
            box.classList.add('gridBox');
            box.style.height = hw + 'px'; 
            box.style.width = hw + 'px';
            //box.style.backgroundColor = '#000';
            box.style.display = 'inline-block';
            grid.appendChild(box);
        }
    }
}

window.onload = createGrid;