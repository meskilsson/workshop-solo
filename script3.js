let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
let h1 = document.createElement('h1');
let ptag = document.createElement('p');

btn1.textContent = "Change heading";
btn2.textContent = "Change paragraph";
btn3.textContent = "Change color";

h1.textContent = "This is a header";
ptag.textContent = "Change this Paragraph";

btn1.addEventListener('click', () => {
    h1.textContent = "Nu händer det saker";
});

btn2.addEventListener('click', () => {
    ptag.textContent = "Gillar att koda allt möjligt, speciellt öva såhär!";
});

btn3.addEventListener('click', () => {
    h1.style.color = "magenta";
});

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(h1);
document.body.appendChild(ptag);