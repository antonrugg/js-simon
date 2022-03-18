console.log('JS OK');

// Descrizione:
// Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.
//     Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha
// visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
//  numeri da indovinare sono stati individuati.

//starting countdown number
let max = 30;

//save setinterval function inside a variable to use it for clearInterval
const countDownTimeOut = setInterval(countDownFunc, 1000);

//function to generate a random number
function generateRandomNumber(min, max) {
    const range = max - min + 1;

    return Math.floor(Math.random() * range) + min;

}


//function for countdown, reducing numbers and clearInterval when number is 0
function countDownFunc() {
    max--;
    countDownParagraph.innerText = `${max}`;

    if (max <= 0) {
        clearInterval(countDownTimeOut);
    }
}


//actions to create div, append it to body, give id
const container = document.createElement('div');
document.body.appendChild(container);
container.id = 'containerNumbers';



//actions to create div for countdown, append it to body,
//create p and append it inside of div
const countDownContainer = document.createElement('div');
document.body.appendChild(countDownContainer);
countDownContainer.id = 'containerCountDown';
const countDownParagraph = document.createElement('p');
countDownContainer.appendChild(countDownParagraph);
countDownParagraph.innerText = `${max}`;



//created empty array where i will store random numbers
const arrayRandomNumbers = [];


//for to create and append paragraphs containing 1 random number each, push random number inside of the empty array arrayRandomNumbers
for (let i = 0; i < 5; i++){
    const numberParagraph = document.createElement('p');
    container.appendChild(numberParagraph);
    let randomNumber = generateRandomNumber(1, 100);
    numberParagraph.innerText = ` ${randomNumber}`;
    arrayRandomNumbers.push(randomNumber);
}

console.log(arrayRandomNumbers);












