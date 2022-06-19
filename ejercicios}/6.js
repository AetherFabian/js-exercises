'use strict';
/*Exercise 6
Hacer un programa que nos diga si es Par e Inpar
1.- Ventana Promt
2.- Si no es valido que nos pida de nuevo el Numero
*/

do {
    var num = parseInt(prompt("Enter a number: "));
    
    if (isNaN(num)) {
        alert("Introduce a number");
    }
    else if (num % 2 == 0) {
        alert(num + " is even");
    }
    else {
        alert(num + " is odd");
    }
} while (isNaN(num));