// const buttonText = ["Change background", "Change Textcolor", "Change content"];

// for (let i = 0; i < buttonText.length; i++) {
//     const buttons = document.createElement('button');
//     buttons.textContent = buttonText[i];
//     document.body.appendChild(buttons);

//     buttons.addEventListener('click', () => {
//         if (i === 0) {
//             document.body.style.background = "#f1f5f9";
//         } else if (i === 1) {
//             document.body.style.color = "#0f172a";
//         } else {
//             document.body.textContent = "DOM manipulation";
//         }
//     });
// };


let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');

let ptag = document.createElement('p');

btn1.textContent = "Background";
btn2.textContent = "Text Color";
btn3.textContent = "Content";
ptag.textContent = "Change me";

btn1.addEventListener('click', () => {
    document.body.style.background = "#f1f5f9";
});

btn2.addEventListener('click', () => {
    document.body.style.color = "#0f172a";
});

btn3.addEventListener('click', () => {
    ptag.textContent = "changed";
});



document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(ptag);


