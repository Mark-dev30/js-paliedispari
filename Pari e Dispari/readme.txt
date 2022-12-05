PROBLEMA:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
Dichiariamo chi ha vinto.

RISOLVO:
1 - L'utente sceglie pari o dispari.
    1.1 - Creo una variabile "evenodd_user" a cui assegno il valore inserito dall'utente tramite prompt.
    1.2 - Creo una variabile "flag" a cui assegno il valore false.
    1.3 - Creo una condizione
        1.3.1 - Se il valore della variabile "evenodd_user" è uguale a pari/Pari, assegno a "flag" valore true.
        1.3.2 - Altrimenti flag rimane false.
2 - L'utente sceglie un numero da 1 a 5.
    2.1 - Creo una variabile "num_user" a cui assegno il valore inserito dall'utente tramite prompt.
3 - Genero un numero random per il computer.
    3.1 - Creo una variabile " num" a cui assegno il valore 0.
    3.2 - Creo una funzione "numRandom" a cui assegno come parametri 1 e 5.
        3.2.1 - Assegno a "num" un numero casuale utilizzando Math.random.
        3.2.2 - Ritorno al di fuori di fuction il valore della variabile "num"
4 - Sommo i numeri e controllo se il numero della somma è pari o dispari.
    4.1 - Creo una funzione "sumNum" a cui assegno come paramentri il valore della variabile "num" e il valore inserito dall'utente "num_user".
        4.1.1 - Dichiaro all'interno della funzione una variabile "sum" a cui assegno la somma dei due parametri della funzione.
        4.1.2 - Creo una condizione.
            4.1.2.1 - Se il resto della divisione di  "sum" e due è uguale a 0, ritorno il valore true.
            4.1.2.2 - Altrimenti ritorno il valore false.
5 - Stampo a schermo chi ha vinto.
    5.1 - Creo una variabile "flag2" a cui assegno la funzione "sumNum".
    5.1 - Creo un condizione.
        5.1.1 - Se flag è uguale a flag2, mostro a schermo "Hai Vinto".
        5.1.2 - Altrimenti mostro a schermo "Non hai vinto. Ritenta!".