// alert("Hello World!")


// variabile del pulsante play
const myButton = document.getElementById("play");

let cellsNumber; // perché non funziona dentro addEventListener?
let cellsPerRow;

// funzione che parte quando il pulsante viene azionato
myButton.addEventListener("click", function (){

    // questa parte mi serve per svuotare il container
    document.querySelector(".container").innerHTML = "";

    //variabile della selezione del livello: mi serve per prendere il valore
    const selectLevel = document.getElementById("select").value;
    console.log(selectLevel);

    // variabile del container
    const myContainer = document.querySelector(".container");


    //switch per la selezione del livello
    switch (selectLevel) {
        case "easy":
            cellsNumber = 100;

            // soluzione ripetitiva
            // for (let i = 1; i <= 100; i++) {
            //     myContainer.innerHTML += `
            //     <div class="cube easy">${i}</div>`
            // }
        break;

        case "medium":
            cellsNumber = 81;

            // soluzione ripetitiva
            // for (let i = 1; i <= 81; i++) {
            //     myContainer.innerHTML += `
            //     <div class="cube easy">${i}</div>`
            // }
        break;

        case "hard":
            cellsNumber = 49;

            // soluzione ripetitiva
            // for (let i = 1; i <= 49; i++) {
            //     myContainer.innerHTML += `
            //     <div class="cube easy">${i}</div>`
            // }
    }

    cellsPerRow = Math.sqrt(cellsNumber);
    //console.log(cellsPerRow);

    // variabile per la larghezza/altezza quadrati 
    const size = `calc(100% / ${cellsPerRow})`;

    // creo un ciclo for per popolare la griglia con un nodo perché usare template literal era complesso (stringa e non oggetto, addEventListener non funziona)
    for (let i = 1; i <= cellsNumber; i++) {
        const node = document.createElement("div"); // questo è un oggetto 
        node.classList.add("cube"); // aggiungo al nodo la mia classe
        node.innerHTML = i;
        node.style.width = size;
        node.style.height = size;
        console.log(node);
        myContainer.appendChild(node);
    }
    
});
