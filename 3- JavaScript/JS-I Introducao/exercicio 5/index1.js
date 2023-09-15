let showMenu = "";
do {
  showMenu = prompt(
    `escolha uma opcao para comecar\n1- opcao 1\n2- opcao 2\n3- opcao 3\n4- opcao 4\n5- sair`
  );
  switch (showMenu) {
    case "1":
      alert("opcao 1 escolhida");
      break;
    case "2":
      alert("opcao 2 escolhida");
      break;
    case "3":
      alert("opcao 3 scolhida");
      break;
    case "4":
      alert("opcao 4 escolhida");
      break;
    case "5":
      alert("Encerrando o programa...");
      break;
    default:
      alert("opcao invalida");
  }
} while (showMenu !== "5");
