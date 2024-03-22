let button = document.querySelector(".button1");
let images = document.querySelectorAll(".image");
let names = document.querySelectorAll(".name");
let statuts = document.querySelectorAll(".statut");
let genres = document.querySelectorAll(".genre");
let especes = document.querySelectorAll(".espece");

let changeCharacter = async () => { 
    let randomNumber = Math.ceil(Math.random() * 826) + 1;
    let requestString = `https://rickandmortyapi.com/api/character/${randomNumber}`;
    let data = await fetch(requestString);
    let response = await data.json();
    return response;
};

let displayMultipleCharacters = async () => {
    let characters = [];
    for (let i = 0; i < images.length; i++) {
        characters.push(await changeCharacter());
    }
    characters.forEach((character, index) => {
        images[index].src = character.image;
        names[index].textContent = character.name;
        genres[index].textContent = character.gender;
        especes[index].textContent = character.species;
        statuts[index].textContent = character.status;
    });
};

window.addEventListener("load", () => {
    displayMultipleCharacters();
});

button.addEventListener("click", () => {
    displayMultipleCharacters();
});

/*----------------------------------------------------------------*/


let button2 = document.querySelector(".button2");

let filterAndDisplayDeadCharacters = async () => {
    let characters = [];
    for (let i = 0; i < images.length; i++) {
        let character = await changeCharacter();
        if (character.status === "Dead") {
            characters.push(character);
        } else {
            // If the character fetched is not dead, try again until we find a dead character.
            i--;
        }
    }
    for (let i = 0; i < images.length; i++) {
        images[i].src = characters[i].image;
        names[i].textContent = characters[i].name;
        genres[i].textContent = characters[i].gender;
        especes[i].textContent = characters[i].species;
        statuts[i].textContent = characters[i].status;
    }
};

button2.addEventListener("click", () => {
    filterAndDisplayDeadCharacters();
});

/*-------------------------------------------------------------------------------*/

let button3 = document.querySelector(".button3");

let filterAndDisplayAliveCharacters = async () => {
    let characters = [];
    for (let i = 0; i < images.length; i++) {
        let character = await changeCharacter();
        if (character.status === "Alive") {
            characters.push(character);
        } else {
            // If the character fetched is not dead, try again until we find a dead character.
            i--;
        }
    }
    for (let i = 0; i < images.length; i++) {
        images[i].src = characters[i].image;
        names[i].textContent = characters[i].name;
        genres[i].textContent = characters[i].gender;
        especes[i].textContent = characters[i].species;
        statuts[i].textContent = characters[i].status;
    }
};

button3.addEventListener("click", () => {
    filterAndDisplayAliveCharacters();
});

/*---------------------------------------------------------------------*/

let button4 = document.querySelector(".button4");

let filterAndDisplayUnknownCharacters = async () => {
    let characters = [];
    for (let i = 0; i < images.length; i++) {
        let character = await changeCharacter();
        if (character.status === "unknown") {
            characters.push(character);
        } else {
            // If the character fetched is not dead, try again until we find a dead character.
            i--;
        }
    }
    for (let i = 0; i < images.length; i++) {
        images[i].src = characters[i].image;
        names[i].textContent = characters[i].name;
        genres[i].textContent = characters[i].gender;
        especes[i].textContent = characters[i].species;
        statuts[i].textContent = characters[i].status;
    }
};

button4.addEventListener("click", () => {
    filterAndDisplayUnknownCharacters();
});


