/* PROBLEMA:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma. */

const string = prompt("Inserisci una parola");

function polyIndrome(string)
{
    let array = ((string.split("")).reverse()).join("");
    if (array === string){
        console.log("La parola è palindroma");
    }
    else {
        console.log("La parola non è palindroma");
    }
}

polyIndrome(string);