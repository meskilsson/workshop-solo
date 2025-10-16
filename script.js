let h2 = document.createElement('h2');
let ptag = document.createElement('p');
let div = document.createElement('div');

h2.textContent = "Dagens rubrik!";
h2.style.color = "#1e3a8a";

ptag.textContent = "Sol och fint!";
ptag.style.color = "#fef3c7";

div.textContent = "Det här är en färgad ruta";
div.style.color = "#10b981";


ptag.textContent += " 10/16";


document.body.appendChild(h2);
document.body.appendChild(ptag);
document.body.appendChild(div);