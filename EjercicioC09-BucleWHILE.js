var base = 0;
var nota = 0;
var cantExamen = parseInt(prompt("Introducir cantidad de exámenes: "));
while (base < cantExamen) {
  var sumaNotas = parseInt(
    prompt(`Ahora ingresá la nota del exámen número ${base}:`) // símbolo ` con ALT96
  );
  if (sumaNotas < 0 || sumaNotas > 10 || sumaNotas === isNaN) {
    alert("El rango de las calificaciones es de 0 a 10");
    break;
  }
  base++;
  nota += sumaNotas;
}
var resultadoFinal = nota / cantExamen;
resultadoFinal.toFixed(2);
alert("El promedio final es: " + resultadoFinal);
