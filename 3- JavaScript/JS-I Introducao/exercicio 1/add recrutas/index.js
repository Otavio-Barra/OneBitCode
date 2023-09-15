// - o primeiro nome
// - o sobrenome
// - o campo de estudo
// - o ano de nascimento

// Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

let name = prompt("qual seu nome");
let lastName = prompt("seu sobrenome");
let studyField = prompt("Qual sua área de estudos?");
let year = Number(prompt("ano de nacimento"));
let currentDate = new Date();
const currentYear = currentDate.getFullYear();

alert(
  `Bem vindo ${name} ${lastName} \n vi aqui que seu campo de estudo e ${studyField} e voce tem ${
    currentYear - year
  } anos`
);
