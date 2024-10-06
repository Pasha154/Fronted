const table = document.querySelector("#pifagor");
for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        let td = document.createElement("td");
        td.textContent = (i + 1) * (j + 1);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
