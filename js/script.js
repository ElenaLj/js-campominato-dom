// alert("Hello World!")


// variabile del pulsante play
const myButton = document.getElementById("play");

// funzione che parte quando il pulsante viene azionato
myButton.addEventListener("click", function (){

    // questa parte mi serve per svuotare il container
    document.querySelector(".container").innerHTML = "";

    //variabile della selezione del livello: mi serve per prendere il valore
    const selectLevel = document.getElementById("select").value;
    console.log(selectLevel);

    // variabile del container
    const myContainer = document.querySelector(".container");

    //varibili dei quadrati
    let cellsNumber;
    let cellsPerRow;

    // variabile per array bombe
    const totalBombs = 16;
    // console.log(totalBombs);

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


    const generateBombs = createBombs();
    console.log(generateBombs);
    //console.log(generate); funziona
    
    cellsPerRow = Math.sqrt(cellsNumber);
    //console.log(cellsPerRow);

    // variabile per la larghezza/altezza quadrati 
    const size = `calc(100% / ${cellsPerRow})`;

    //creo un array per il numero delle mie giocate
    const arrayAttempts = [];

    //creo una variabile che rappresenta il totale delle giocate possibile, cioè le caselle verdi
    const attempts = cellsNumber - totalBombs;
    console.log(attempts);

    // creo un ciclo for per popolare la griglia con un nodo perché usare template literal era complesso (stringa e non oggetto, addEventListener non funziona)
    for (let i = 1; i <= cellsNumber; i++) {
        const node = document.createElement("div"); // questo è un oggetto 
        node.classList.add("cube"); // aggiungo al nodo la mia classe
        node.innerHTML = i;
        node.style.width = size;
        node.style.height = size;

        // console.log(typeof node);
        myContainer.appendChild(node);


        //al click aggiungo la classe active con il controllo della bomba
        node.addEventListener("click", function(){

            if(generateBombs.includes(i)) {
                node.classList.add("bomb");
                myContainer.classList.add("game-over");
                alert("Hai perso");
            }
            else {
                this.classList.add("active");
                arrayAttempts.push(i);
            }

            if(arrayAttempts.length === attempts) {
                console.log("Hai vinto");
                alert("Hai vinto");
            }
        });
    }

    console.log(arrayAttempts);

    // ********************************** funzioni

    //questa funzione genera un array di 16 numeri casuali per le bombe;
    function createBombs () {
        //creo array vuoto
        const arrayBombs = [];

        //mi serve il ciclo while per le bombe rosse
        while (arrayBombs.length < totalBombs){
            //variabile per numero random
            const randomNumber = generateRandom(1, cellsNumber);
            //prima di pushare devo evitare doppioni
            if(!arrayBombs.includes(randomNumber)) {
                //ora devo inserire il numero nell'array
                arrayBombs.push(randomNumber);
            }   
        }
        //ordino array in numero crescente
        arrayBombs.sort(function(a, b){return a-b});
        // console.log(arrayBombs); 
        return arrayBombs;
    } 

    //questa funzione genera un numero random;
    function generateRandom (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
