'use strict';
/*Exercise 2
- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
- hasta introducir un numero negativo y ahi mostrar el resultado
*/
var sums = 0;
var n = 0;
do {
    let numero = parseInt(prompt("Introduce un número"));
    sums += numero;
    n++;
} while (numeros > 0);

console.log("The sum of the numbers is "+sums);
console.log("The avarage of the sum is "+sums/n);