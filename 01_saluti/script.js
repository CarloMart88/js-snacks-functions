/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

const nome = nome => `Ciao ${nome}`

// devo sempre dichiarare la variabile generica!

// Invoca la funzione qui e stampa il risultato in console

console.log(nome(userName))

//Risultato atteso se si passa 'Mario': // ciao Mario
