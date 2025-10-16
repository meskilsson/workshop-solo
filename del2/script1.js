let btnColor = document.getElementById('btnColor');
let btnAdd = document.getElementById('btnAdd');
let btnClear = document.getElementById('btnClear');
let container = document.querySelector('.container');

btnColor.addEventListener('click', () => {
    document.body.style.background = "#333";
});

// btnAdd.addEventListener('click', () => {
//     let ptag = document.createElement('p');
//     ptag.textContent = "random paragraph";
//     ptag.style.color = "red";
//     container.appendChild(ptag);
// });

btnClear.addEventListener('click', () => {
    let ps = document.querySelectorAll('p');
    ps.forEach(p => p.textContent = "");
});


const anonymousBtnAdd = function () {
    btnAdd.addEventListener('click', () => {
        let ptag = document.createElement('p');
        ptag.textContent = "random paragraph";
        ptag.style.color = "red";
        container.appendChild(ptag);
    })
}

anonymousBtnAdd();