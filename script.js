//Create a webpage with a 16x16 grid of square divs. Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
//It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.

let container = document.querySelector(".container");


for (let i = 0; i <= 255; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}