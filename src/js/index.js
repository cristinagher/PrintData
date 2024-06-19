// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4];
const primerEjercicio = numbers.map((number) => {
  return number * numbers.indexOf();
});
console.log(primerEjercicio);
