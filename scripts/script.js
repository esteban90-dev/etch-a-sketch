//define variables
let gridContainer;
let newRow;
let newSquare;
let numSquare;
let squareSize;
let square;
let reset;
let userIn;
let x;
let y;
let z;


function createGrid(p1){
    numSquare = p1;
    //calculate square size
    squareSize = 600/numSquare;     //width/height of grid container is 600px

    //clear grid - delete all children divs of main
    gridContainer = document.querySelector(".main");
    gridContainer.innerHTML = "";

    //populate the grid with squares
    for(x = 0; x < numSquare; x++){

        newRow = document.createElement("div");
        newRow.className = 'row-container';
        gridContainer.appendChild(newRow);

        for(y = 0; y < numSquare; y++){
            
            newSquare = document.createElement("div");
            newSquare.className = 'square';
        
            newSquare.style.width = squareSize + "px";
            newSquare.style.height = squareSize + "px";
        
            newRow.appendChild(newSquare);
            
        }

    }

    //after grid is created, add mouseover events for each square
    square = document.querySelectorAll(".square");
    for(z = 0; z < square.length; z++){
        square[z].addEventListener("mouseover",changeColor);
    }

}

//create default grid when user loads site - 25 squares per row
if(!userIn){
    createGrid(50);
}

//event function to change square color on mouseover
function changeColor(e){
    e.target.style.backgroundColor = 'rgb(88, 88, 88)';
}

//add events for reset button
function enHighlight(e){
    e.target.className = 'reset-button-highlight';
}

function disHighlight(e){
    e.target.className = 'reset-button';
}

function resetGrid(){
    userIn = 0;
    while(!userIn){
        userIn = prompt('Enter how many squares per row');
    }
    createGrid(userIn);
}

reset = document.querySelector(".reset-button");
reset.addEventListener("mouseover",enHighlight);
reset.addEventListener("mouseout",disHighlight);
reset.addEventListener("click",resetGrid);





