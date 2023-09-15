let value = parseFloat(prompt("digite um valor em metros para ser convertido"));
const menu = prompt(
  "escolha a medida para conversao\n1- milimetro (mm)\n2- centímetro (cm)\n3- decímetro (dm)\n4- decâmetro (dam)\n5- hectômetro (hm)\n6- quilômetro (km)"
);
let unitMeasurement = "";

switch (menu) {
  case "1":
    value *= 1000;
    alert(`o valor ${value} metros convertido para milimetros da ${value} mm`);
    break;
  case "2":
    value *= 100;
    alert(`o valor ${value} metros convertido para centímetro da ${value} cm`);
    break;
  case "3":
    value *= 10;
    alert(`o valor ${value} metros convertido para decímetro da ${value} dm`);
    break;
  case "4":
    value /= 10;
    alert(`o valor ${value} metros convertido para decâmetro da ${value} dam`);
    break;
  case "5":
    value /= 100;
    alert(`o valor ${value} metros convertido para hectômetro da ${value} hm`);
    break;
  case "6":
    value /= 1000;
    alert(`o valor ${value} metros convertido para quilômetro da ${value} km`);
    break;

  default:
    alert("opcao invalida");
    break;
}

console.log(value);
