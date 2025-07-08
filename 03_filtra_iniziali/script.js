// /* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

// const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// // Dichiara la funzione qui.

// const startA = (array , element) => {

//   const first = [] 

//   for(let i = 0 ; i < array.length ; i++){

//     if (array[i] [0] === element ){

//       first.push(array[i])

//     }

    
//   }

//   return first

// }


// // Invoca la funzione qui e stampa il risultato in console

// console.log(startA(names , 'A'))

// //Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


// Scrivi una funzione che accetti un array di parole e una lettera, e restituisca un nuovo array con le parole che finiscono con quella lettera.

// Esempio:
const words = ["casa", "mare", "sole", "vento", "pioggia", "neve"];

const filterByLastLetter = (array , element) => {

  const LastLetter = [] ;

  for (let i = 0 ; i<array.length ; i++) {

    if (array[i][array[i].length - 1] === element ){


    LastLetter.push(array[i])
    }

  }

  return LastLetter
}



console.log(filterByLastLetter(words, 'e')); 

// Deve restituire: ["mare", "sole", "neve"]