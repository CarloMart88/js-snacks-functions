/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const startA = (array , element) => {

  const first = [] 

  for(let i = 0 ; i < array.length ; i++){

    if (array[i][0].toLowerCase() === element.toLowerCase() ){
      //meglio portare tutto in lower case per gestire un informazione più generica!
      first.push(array[i])

    }

    
  }

  return first

}


// Invoca la funzione qui e stampa il risultato in console

console.log(startA(names , 'A'))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

