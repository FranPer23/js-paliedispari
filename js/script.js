// genero un numero random per il computer
const rndmNumberPc = [];
for (let i= 0; i < 1; i++) {
    const rndmNumber = getRndNmbr (1, 5);
    rndmNumberPc.push(rndmNumber)
    
}
console.log(rndmNumberPc);

function getRndNmbr(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// chiedo un num random all'utente
const userNmbr = parseInt(prompt("Dimmi un numero da 1 a 5"))


const addNumbr = userNmbr + rndmNumberPc
console.log(addNumbr);

/**
//  * Description: Il numero è pari o dispari?
//  * @param {number} numberToCheck
//  * @returns {string} "even" se pari "odd" se dispari
//  */

function oddEven(numberToCheck) {
    
let result
if (addNumbr % 2 === 0) {
    
    result = "pari"
} else {
    result = "dispari"
}
    return result;

}

console.log(oddEven);

