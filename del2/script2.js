let divs = document.querySelectorAll(".container div");

let colors = ["blue", "red", "green"];

divs.forEach((div, index) => {
    div.addEventListener('mouseenter', () => {
        div.style.background = colors[index];
    });

    div.addEventListener('mouseleave', () => {
        div.style.background = "";
    });
});














// Skapa en ny script-fil script2.js.
// ● Skapa tre <div> med olika bakgrundsfärger och text, t.ex. "Box 1", "Box 2", "Box
// 3".
// ● Placera divarna i en sektion med klassnamnet container.
// Instruktioner:
// 1. Lägg till en mouseover-eventlistener på varje div som ändrar bakgrundsfärgen när
// musen hovrar över divarna.
// 2. Lägg till en mouseout-eventlistener som återställer divens ursprungliga färg när
// musen lämnar divarna.
// 3. Använd samma callback-funktion för alla tre divar om möjligt, men se till att varje div
// får sin egna färg.
// 4. Testa att flytta musen över och ut från divarna för att se effekten.
