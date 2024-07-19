let container = document.querySelector(".container");
for(let i = 0; i < 256; i++) {
    div = document.createElement("div");
    div.setAttribute("class", "grid");
    container.appendChild(div);
}