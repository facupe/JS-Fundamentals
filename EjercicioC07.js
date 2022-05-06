var diametro = parseFloat(prompt("Ingrese el diámetro: "));
var grosor = parseFloat(prompt("Ingrese el grosor: "));
if (diametro > 1.4) {
  alert("La rueda es para un vehículo grande");
} else if (diametro <= 1.4 && diametro > 0.8) {
  alert("La rueda es para un vehículo mediano");
} else {
  alert("La rueda es para un vehículo pequeño");
}

if (diametro > 1.4 && grosor < 0.4) {
  alert("El grosor para esta rueda es inferior al recomendado");
} else if (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
  alert("El grosor para esta rueda es inferior al recomendado");
}
