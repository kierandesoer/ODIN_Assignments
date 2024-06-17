const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p_tag = document.createElement("p");
p_tag.classList.add("p_tag");
p_tag.textContent = "Hey I'm red!";
p_tag.style.color = "red";

const h3_tag = document.createElement("h3");
h3_tag.classList.add("h3_tag");
h3_tag.textContent = "I'm a blue H3!";
h3_tag.style.color = "blue";



const new_div = document.createElement("div");
new_div.classList.add("new_div");
new_div.setAttribute("style", "border: 1px solid; border-color: black; background: pink;");

const h1_tag = document.createElement("h1");
h1_tag.classList.add("h1_tag");
h1_tag.textContent = "I'm in a div";

const another_p_tag = document.createElement("p");
another_p_tag.classList.add("another_p_tag");
another_p_tag.textContent = "ME TOO!";

new_div.appendChild(h1_tag);
new_div.appendChild(another_p_tag);


container.appendChild(content);
container.appendChild(p_tag);
container.appendChild(h3_tag);
container.appendChild(new_div);


