// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];

const primerEjercicio = numbers.map((number, index) => {
  return number * index;
});

console.log(primerEjercicio)

//Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const numbersDividedByIndexPlus2=numbers => {
  const results = numbers.map((number, index) => {
    return number/ (index + 2);
  });
  return results;
}
const resultsDivided = numbersDividedByIndexPlus2([1, 2, 3, 4, 5]);
console.log(resultsDivided);

//Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.


const tercerEjercicio = words => {
  const newWords= words.map(word => {
    return word.toUpperCase();
  });
  return newWords
}
const resultsWordsUpper = tercerEjercicio(["patatas", "con", "huevo", "frito"]);
console.log(resultsWordsUpper);

// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const cuartoEjercicio = (words, letter) => {
 const newWords = words.filter(word => {

  const formattedWord = word.toLowerCase();
  const formattedLetter=letter.toLowerCase();
  return formattedWord.startsWith(formattedLetter);
 });
if(newWords.length===0) {
  console.log(`NO hay palabras que empiecen por ${letter}`)
} else {
  return newWords;
}

};

const resultCuartoEjercicio =cuartoEjercicio(["casa", "perro", "coche"], "c");
console.log(resultCuartoEjercicio);

//Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas
//lo he modificado directamente. Sin esto, simplemente sería sin la parte de formatted.

//Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array
const sumAllValues= (numbers)=>{
  const total= numbers.reduce((acc, number) => {
    console.log(acc);
    return acc + number;
  });
}

sumAllValues([1, 2, 3, 4, 5 ,6 ,7 ,8 , 9, 10])