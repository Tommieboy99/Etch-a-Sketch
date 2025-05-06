let button = document.createElement("button");
button.textContent = "Set Grid Size";
document.body.prepend(button); // Add the button on top of the body

button.addEventListener("click", () => {
    let input = prompt("Number of squares per side for the new grid:");
    let userInput = parseInt(input);

    if (!isNaN(userInput) && userInput > 0 && userInput < 100) {
        createGrid(userInput); // Call the function createGrid with userInput
    } else {
        alert("Please enter a valid number greater than 0 and less than 100");
    }
});

function createGrid (userInput) {

    container.innerHTML = "";

    let totalSquares = userInput * userInput;
    let squareSize = 960 / userInput + "px";

    for (let i = 0; i < totalSquares; i++ ) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.height = squareSize;
        square.style.width = squareSize;


        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "yellow"; 
        });

        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "white";
        }); 

        container.appendChild(square);
    }
}

let container = document.querySelector(".container");


for (let i = 0; i <= 255; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "yellow"; 
    });

    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "white";
    }); 
}
