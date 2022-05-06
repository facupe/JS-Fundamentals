/*

FORMA TRADICIONAL, SIN BUCLE PARA PEDIR PROMPT

var primerNum = parseFloat(prompt("Ingrese el primer númreo: "));
var segundoNum = parseFloat(prompt("Ingrese el segundo númreo: "));
var terecerNum = parseFloat(prompt("Ingrese el tercer númreo: "));
var cuartoNum = parseFloat(prompt("Ingrese el cuarto númreo: "));
var quintoNum = parseFloat(prompt("Ingrese el quinto númreo: "));
alert(
  "La suma de los números es: " +
    (primerNum + segundoNum + terecerNum + cuartoNum + quintoNum)
);
*/
let total = 0;
for (i = 0; i <= 4; i++) {
  var resultado = Number(prompt("Ingrese los 5 números uno por uno:"));
  if (!isNaN(resultado)) {
    total += resultado;
  } else {
    alert("No es un número");
  }
}
alert("El resultado es: " + total);
