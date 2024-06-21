// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];

const primerEjercicio = numbers.map((number, index) => {
  return number * index;
});

console.log(primerEjercicio);

//Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const numbersDividedByIndexPlus2 = (numbers) => {
  const results = numbers.map((number, index) => {
    return number / (index + 2);
  });
  return results;
};
const resultsDivided = numbersDividedByIndexPlus2([1, 2, 3, 4, 5]);
console.log(resultsDivided);

//Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const tercerEjercicio = (words) => {
  const newWords = words.map((word) => {
    return word.toUpperCase();
  });
  return newWords;
};
const resultsWordsUpper = tercerEjercicio(["patatas", "con", "huevo", "frito"]);
console.log(resultsWordsUpper);

// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const cuartoEjercicio = (words, letter) => {
  const newWords = words.filter((word) => {
    const formattedWord = word.toLowerCase();
    const formattedLetter = letter.toLowerCase();
    return formattedWord.startsWith(formattedLetter);
  });
  if (newWords.length === 0) {
    console.log(`NO hay palabras que empiecen por ${letter}`);
  } else {
    return newWords;
  }
};

const resultCuartoEjercicio = cuartoEjercicio(["casa", "perro", "coche"], "c");
console.log(resultCuartoEjercicio);

//Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas
//lo he modificado directamente. Sin esto, simplemente sería sin la parte de formatted.

//Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array

const sumitaAaaa = (numbers) => {
  const totalReduce = numbers.reduce((acc, number) => {
    console.log(acc);
    return acc + number;
  });
};
sumitaAaaa([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:"Número: 2 - Cuadrado: 4 - Cubo: 8".

const printArray = (numbers) => {
  const septimoEjercicio = numbers.forEach((number, index) => {
    const actualNumber = number;
    const cuadradoNumber = number * number;
    const cuboNumber = number * number * number;
    console.log(
      `Número: ${actualNumber} - Cuadrado: ${cuadradoNumber} - Cubo: ${cuboNumber}.`
    );
  });
};
printArray([1, 2, 3, 4, 5]);

//Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsWord = (word) => {
  const vowels = "aeiou";
  const wordToArray = word.split("");
  const finalWord = wordToArray.reduce((acc, letter) => {
    if (vowels.includes(letter)) {
      return acc + letter.toUpperCase();
    }
    return acc + letter;
  }, "");

  console.log(finalWord);
};

vowelsWord("akekos");

//Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOdds = (numbers) => {
  const evenArray = [];
  const oddArray = [];

  numbers.forEach((number) => {
    const randomNumber = Math.floor(Math.random() * 11);
    const multiplication = number * randomNumber;

    if (multiplication % 2 === 0) {
      evenArray.push(multiplication);
    } else {
      oddArray.push(multiplication);
    }
  });
  console.log(numbers);
  console.log(evenArray);
  console.log(oddArray);
};
evenAndOdds([1, 2, 3, 4, 5, 6]);
