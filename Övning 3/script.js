let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');
let btnAdd = document.querySelector('.btnAdd')





ul.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

btnAdd.addEventListener('dblclick', (e) => {
    let newLi = document.createElement('li');
    newLi.textContent = "new item";
    ul.appendChild(newLi);
});


// nstruktioner:
// ● Lägg till en dblclick-eventlistener på varje list-element som tar bort elementet
// som dubbelklickas.
// ● Lägg till en dblclick-eventlistener på knappen som lägger till ett nytt element
// istället för att klicka en gång.
// ● Använd event.target för att identifiera vilket element som dubbelklickades.
// ● Testa att dubbelklicka på olika listpunkter och knappen för att observera hur listan
// förändras dynamiskt.
// Om ni hinner:
// Skapa minst en rolig uppgift utifrån det ni lärt er hittills om DOM-manipulering och events!
// Spara detta i en mapp i ert repo som heter: DOM-excercises!
// Gör repot public så övriga kan få gå in och testa!
