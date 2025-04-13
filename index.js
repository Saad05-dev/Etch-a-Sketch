const container = document.createElement("div");
container.classList.add("container");
container.setAttribute("style","width: 100%;height: 100%;display: grid;grid-template-columns: repeat(16,50px);gap: 20px;margin: auto;justify-content: center;align-items: center");
document.body.appendChild(container);

for (i = 0 ; i < 256; i ++)
{
    let rows = document.createElement("div");
    rows.setAttribute("style","background-color: black;width: 20px;height: 20px");
    container.appendChild(rows);
}   