/* PROBLEMA:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma. */
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    const string = (document.getElementById("input")).value;

    function polyIndrome(string)
{
    
    let array = ((string.split("")).reverse()).join("");
    if (array === string){
        document.getElementById("insert").innerHTML = "La parola è Palindroma";
    }
    else {
        document.getElementById("insert").innerHTML = "La parola non è Palindroma";
    }
}

polyIndrome(string);

})


