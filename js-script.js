
const container = document.querySelector("#container");
container.classList.add("container");

function createSketchArea(rows, columns, sketchWidth, sketchHeight) {
    container.style.height = sketchHeight+"px";
    container.style.width = sketchWidth+"px";

    // Add row divs
    for (i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        // Add column divs
        for (n = 0; n < columns; n++) {
            const column = document.createElement("div");
            column.id = "col_" + n;
            column.classList.add("column");
            column.style.width = sketchWidth / columns +"px";
            column.style.height = sketchHeight / rows +"px";
            row.appendChild(column);
        }
        container.appendChild(row);

    }
}

createSketchArea(16,16,600,600);