//Create a webpage with a 16x16 grid of square divs. Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
//It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.

let container = document.querySelector(".container");


for (let i = 0; i <= 255; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    //Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    //Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "yellow"; 
    });

    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "white";
    });
}


