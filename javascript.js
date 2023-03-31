const container1 = document.querySelector('.container1');

let boxNumber = 16;
let sideBox = (960 / boxNumber) - 2;

let arrayDiv = new Array();
let arrayOpa = new Array();

const button = document.querySelector('button');

newArray();

button.addEventListener('click', () => {
    removeGrid();
    newGrid();
});

function newGrid () {
    do {
        boxNumber = prompt("Enter grid size");
    }while (boxNumber > 50);
    sideBox = (960 / boxNumber) - 2;
    newArray ();
}

function newArray () {
    for (let i = 0 ; i < (boxNumber * boxNumber) ; i++) {
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].className = "block" + i;
        arrayDiv[i].style.border = "thin solid #0000FF";
        arrayDiv[i].style.boxSizing = 'border-box';
        arrayDiv[i].style.minHeight = `${sideBox}px`;
        arrayDiv[i].style.minWidth = `${sideBox}px`;
        arrayDiv[i].style.margin = '1px';
        arrayDiv[i].style.flex = "1";
        arrayOpa[i] = 0.1;
        arrayDiv[i].addEventListener('mouseenter', () => {
            arrayDiv[i].style.backgroundColor = `rgba(255,0,0,${arrayOpa[i]})`;
            arrayOpa[i]+=.1;
        });
        container1.appendChild(arrayDiv[i]);
    }
}

function removeGrid () {
    for (let i = 0 ; i < (boxNumber * boxNumber) ; i++) {
        container1.removeChild(arrayDiv[i]);
    }
}