const name = prompt("qual seu nome?");
let listCity = [];

let quest = prompt(`ja visitou alguma cidade ${name}`);

if (quest === "sim") {
  let cityName = prompt(`${name} qual sua ultima cidade?`);
  listCity.push(cityName);
  quest = prompt("visitou outra cidade?");
  while (quest === "sim") {
    cityName = prompt("Qual sua proxima cidade?");
    listCity.push(cityName);
    quest = prompt("visitou outra cidade?");
  }
  if (quest === "nao") {
    alert(
      `obrigado por participar! Aqui estao as suas informações: \nNome:${name}\nQuantidade de cidades: ${listCity.length}\nNome das cidade: ${listCity}`
    );
  }
} else if (quest === "nao") {
  alert("que pena obrigado por participar");
}
