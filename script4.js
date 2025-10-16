const list = document.createElement("ul");

const items = [
    "druckit kaffe",
    "kodat",
    "haft lektion",
    "läst kod",
    "testad övningar",
];

const colors = ["#1e3a8a", "#059669", "#f97316", "#2563eb", "#475569"];

let listItems = [];

for (let i = 0; i < items.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = items[i];
    listItem.style.color = colors[i];
    list.appendChild(listItem);
    listItems.push(listItem);
}


listItems[2].textContent = "Det här ändrades i JavaScript";
const last = list.lastChild;
last.remove();


document.body.appendChild(list);