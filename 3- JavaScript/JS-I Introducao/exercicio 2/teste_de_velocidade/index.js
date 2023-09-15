const car1 = prompt("digite o nome do primeiro carro");
const car1Velo = prompt(`digite a velocidade do ${car1}`);

const car2 = prompt("digite o nome do segundo carro");
const car2Velo = prompt(`digite a velocidade do ${car2}`);

if (car1Velo > car2Velo) {
  alert(`o ${car1} e mais veloz`);
} else if (car1Velo < car2Velo) {
  alert(`o ${car2} e mais veloz`);
} else if (car1Velo == car2Velo) {
  alert("os carros tem a mesma velocidade");
}
