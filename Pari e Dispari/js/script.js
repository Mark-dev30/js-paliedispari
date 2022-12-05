/* PROBLEMA:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
Dichiariamo chi ha vinto. */

const evenodd_user = prompt ("Scegli pari o dispari");

const num_user = parseInt(prompt("Inserisci un numero da 1 a 5"));

let flag = false;
let num = 0;

if (evenodd_user === "pari" || evenodd_user === "Pari"){
    flag = true;
    
}


function numRandom (min, max) {
    num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
    
}
numRandom (1, 5);



function sumNum (num1, num2){
    let sum = num1 + num2;
    
    if (sum % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let flag2 = sumNum (num, num_user);


if (flag === flag2){
    alert("Hai vinto")
}
else{
    alert("Non hai vinto. Ritenta!")
}
