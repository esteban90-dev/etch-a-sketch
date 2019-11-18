//define variables
let gridContainer;
let newRow;
let newSquare;
let numSquare = 20;
let squareSize;
let x;
let y;

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



