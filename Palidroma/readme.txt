PROBLEMA:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.

RISOLVO:
1 - Chiedo all’utente di inserire una parola.
    1.1 - Creo una variabile "string" e inserisco il valore inserito dall' utente tramite prompt.
2 - Creo una funzione "polyIndrome" per capire se la parola inserita è palindroma.
    2.1 - Dichiaro una variabili "array" a cui assegno come valore l'input inserito dall'utente.
    2.2 - Converto in array la stringa inserita nella variabile "array".
    2.3 - Inverto gli elementi della variabile "array".
    2.4 - Trasformo in stringa la variabile "array".
    2.5 - Creo una condizione
        2.5.1 - Se il valore della variabile "array" è uguale al valore della variabile "string", mostro a schermo "La parola è palindroma".
        2.5.2 - Altrimenti mostro a schermo "La parola non è palindroma".