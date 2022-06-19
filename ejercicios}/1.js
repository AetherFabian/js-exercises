'use strict';
/*Exercise 1
- Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales
- PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir
*/
var num1 = parseInt(prompt("Enter number 1: "));
var num2 = parseInt(prompt("Enter number 2: "));

while (num1 <= 0 || isNaN(num1)){
    num1 = parseInt(prompt("Enter number 1: "));
}
while (num2 <= 0 || isNaN(num2)){
    num2 = parseInt(prompt("Enter number 2: "));
}

if (num1 > num2) {
        console.log("The greater between "+num1+" and "+num2+"is "+num1);
}
else if (num1 < num2) {
        console.log("The greater between "+num2+" and "+num1+"is "+num2);
}
else {
        console.log("The numbers are equal");
}
