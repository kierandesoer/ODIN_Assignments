const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const itemToAdd = input.value;
    input.value = '';

    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(itemSpan);
    listItem.appendChild(deleteBtn);

    itemSpan.textContent= itemToAdd;
    deleteBtn.textContent ="Delete";

    list.appendChild(listItem);

    deleteBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    focus.input;

});