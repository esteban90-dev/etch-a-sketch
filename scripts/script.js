//define global variables
const initialGridSize = 45;
let gridContainer;
let newRow;
let newSquare;
let numSquare;
let squareSize;
let square;
let selectBtn;
let userIn;
let w;
let x;
let y;
let z;

function createGrid(p1,p2){
    //calculate square size
    squareSize = 600/p1;     //width/height of grid container is 600px

    //clear grid - delete all children divs of main
    gridContainer = document.querySelector(".main");
    gridContainer.innerHTML = "";

    //populate the grid with squares
    for(x = 0; x < p1; x++){

        newRow = document.createElement("div");
        newRow.className = 'row-container';
        gridContainer.appendChild(newRow);

        for(y = 0; y < p1; y++){
            newSquare = document.createElement("div");
            newSquare.className = 'square';
            newSquare.style.width = squareSize + "px";
            newSquare.style.height = squareSize + "px";
            newRow.appendChild(newSquare);
        }
    }

    //after grid is created, add mouseover events for each square
    square = document.querySelectorAll(".square");

    //squares turn B&W on mouseover
    if(p2 == 0){
        for(z = 0; z < square.length; z++){
            square[z].addEventListener("mouseover",squareShadeBW);
        }
    }

    //squares turn random color on mouseover
    else{
        for(z = 0; z < square.length; z++){
            square[z].addEventListener("mouseover",squareShadeColor);
        }
    }
    
}

function getUserInput(){
    numSquare = 0;
    while(!numSquare){
        numSquare = prompt('Enter how many squares per row');
    }
    return numSquare;
}

function resetBtnClick(){
    numSquare = getUserInput();
    createGrid(numSquare,0);
}

function modeBtnClick(){
    //change button text, redraw grid, squares will be in color
    if(selectBtn[1].innerHTML == 'B&amp;W MODE'){
        selectBtn[1].innerHTML = 'COLOR MODE';
        createGrid(numSquare,0);
    }

    //change button text, redraw grid, squares will be in B&W
    else{
        selectBtn[1].innerHTML = 'B&W MODE';
        createGrid(numSquare,1);
    }
}

function randomColor(){
    return Math.floor(Math.random()*256);
}

function squareShadeBW(e){
    e.target.style.backgroundColor = 'rgb(88, 88, 88)';
}

function squareShadeColor(e){
    let rgbVal1;
    let rgbVal2;
    let rgbVal3;

    rgbVal1 = randomColor();
    rgbVal2 = randomColor();
    rgbVal3 = randomColor();

    e.target.style.backgroundColor = 'rgb(' + rgbVal1 + ',' + rgbVal2 + ',' + rgbVal3 + ')';
}

function enHighlight(e){
    e.target.className = 'select-button-highlight';
}

function disHighlight(e){
    e.target.className = 'select-button';
}

//Create initial grid 
numSquare = initialGridSize;
createGrid(numSquare,0);

//add event listeners for buttons
selectBtn = document.querySelectorAll(".select-button");
for(w = 0; w < selectBtn.length; w++){
    selectBtn[w].addEventListener("mouseover",enHighlight);
    selectBtn[w].addEventListener("mouseout",disHighlight);
    
    if(w == 0){
        selectBtn[0].addEventListener("click",resetBtnClick);
    }

    if(w == 1){
        selectBtn[1].addEventListener("click",modeBtnClick);
    }
}







