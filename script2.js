let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
let btn4 = document.createElement('button');
let h1 = document.createElement('h1');


btn1.textContent = "background";
btn2.textContent = "New P";
btn3.textContent = "Remove P";
btn4.textContent = "Names!";



btn1.onclick = function () {
    document.body.style.background = "#666";
}

btn2.addEventListener('click', () => {
    let newP = document.createElement('p');
    newP.textContent = "Tillräckligt";
    document.body.appendChild(newP);
});

btn3.addEventListener('click', () => {
    let ps = document.querySelectorAll('p');
    lastP = ps[ps.length - 1];
    if (lastP) lastP.remove();
});

btn4.onclick = function () {
    h1.textContent = "Mattias";
}


document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(btn4);
document.body.appendChild(h1);
