// set inital dimensions
const canvasSize = 600;
const gridSize = 16;
let pixelDimension = canvasSize / gridSize + "px";

// get and setup main container
const container = document.querySelector("#container");
container.classList.add("container");
container.style.height = canvasSize + "px";
container.style.width = canvasSize + "px";


// Add navbar
const navBar = document.createElement("div");
navBar.style.padding = "10px";
const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize the grid";
resizeBtn.addEventListener("click", () => {
    let result = prompt("Enter the height/width dimension (must be less than 100)");
    if (isNaN(result) || result > 100) {
        alert("Must be a number i.e. 1,2,3... and less than or 100");
        return;
    } else {
        createSketchArea(result);
    }
});
navBar.appendChild(resizeBtn);
container.appendChild(navBar);


// Create container for the canvas
const canvas = document.createElement("div");
container.appendChild(canvas);

// function to render the canvas
function createSketchArea(gridSize) {

    canvas.innerHTML = '';
    let pixelDimension = canvasSize / gridSize + "px";
    // set pixel_size in css
    let pS = document.documentElement.style.setProperty('--pixel_size', pixelDimension);

    // Add row divs
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        // Add pixel divs
        for (n = 0; n < gridSize; n++) {
            const pixel = document.createElement("div");
            pixel.id = "pixel_" + i + "_" + n;
            pixel.classList.add("pixel");

            // Add hover event listener
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = "black";
            }
            );


            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
    return;
}

createSketchArea(gridSize);