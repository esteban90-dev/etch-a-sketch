//define variables
let gridContainer;
let newRow;
let newSquare;
let numSquare = 20;
let squareSize;
let square;
let x;
let y;
let z;

//calculate square size
squareSize = 600/numSquare;


//populate the grid with squares
gridContainer = document.querySelector(".main");

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


//add event to change square color when mouse hovers over
function changeColor(e){
    e.target.style.backgroundColor = 'rgb(88, 88, 88)';
    //e.target.style.color = 'black';
}

square = document.querySelectorAll(".square");
for(z = 0; z < square.length; z++){
    square[z].addEventListener("mouseover",changeColor);
}

