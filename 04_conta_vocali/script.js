/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vocals = (element) => {

  const vocali = ["a", "e", "i", "o", "u"]

  //contatore 
  let contatore = 0 ;

  for( let i = 0 ; i < element.length ; i++) {

    if(vocali.includes(element[i])){
      contatore++
    }
  }

  return contatore;

}



// // Invoca la funzione qui e stampa il risultato in console

console.log(vocals(word))

// //Risultato atteso se si passa 'javascript': 3 (a, a, i)

const words = 'javascript';

const consonante = (element) => {

  const consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

  let contatore = 0; 

  for(let i = 0 ; i<element.length ; i++) {

    if(consonant.includes(element[i])) {
      contatore++
    }
  }

  return contatore
}

console.log(consonante(words))
