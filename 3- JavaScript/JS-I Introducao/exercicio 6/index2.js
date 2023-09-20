// Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo.
// Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem.
// O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo
// se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra
// lida da esquerda para direita e da direita para esquerda.

let palindrome = prompt("type a word, and see if is a palindrome");
let checkPalindrome = "";

for (let i = palindrome.length - 1; i >= 0; i--) {
  checkPalindrome += palindrome[i];
}
if (checkPalindrome === palindrome) {
  alert(`The word ${palindrome}, it's a Palindrom`);
} else {
  alert(`${checkPalindrome} is not a palindrome of ${palindrome}`);
}
console.log(checkPalindrome);
console.log(palindrome);
