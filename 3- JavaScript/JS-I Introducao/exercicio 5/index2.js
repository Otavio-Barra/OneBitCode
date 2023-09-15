let startingMoney = Number(prompt("valor inicial que deseja comecar"));
let showMenu = "";
do {
  showMenu = prompt(
    `voce atualmente tem ${startingMoney}\n1- adicionar mais dinheiro\n2- retirar dinheiro\n3- sair`
  );
  switch (showMenu) {
    case "1":
      let addMoney = Number(prompt("valor que deseja adicionar"));
      startingMoney += addMoney;
      break;
    case "2":
      let subtractMoney = Number(prompt("valor que deseja tirar"));
      startingMoney -= subtractMoney;
      break;
    case "3":
      alert("saindo...");
      break;
    default:
      alert("opcao invalida");
  }
} while (showMenu !== "3");
