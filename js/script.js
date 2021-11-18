// alert("Hello World!")


// variabile del pulsante play
const myButton = document.getElementById("play");

// let items = "";

myButton.addEventListener("click", function (){

    // devo svuotare il container all'inizio così lo fa sempre
    document.querySelector(".container").innerHTML = "";

    //variabile della selezione del livello
    const selectLevel = document.getElementById("select").value;
    console.log(selectLevel);

    // variabile del container
    const myContainer = document.querySelector(".container");

    //switch per la selezione del livello

    switch (selectLevel) {
        case "easy":
        for (let i = 1; i <= 100; i++) {
            myContainer.innerHTML += `
            <div class="cube easy">${i}</div>`
        }
        break;

        case "medium":
        for (let i = 1; i <= 81; i++) {
            myContainer.innerHTML += `
            <div class="cube medium">${i}</div>`
        }
        console.log(myContainer);
        break;

        case "hard":
        for (let i = 1; i <= 49; i++) {
            myContainer.innerHTML += `
            <div class="cube hard">${i}</div>`
        }
        console.log(myContainer);
    }
});
