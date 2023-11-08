//o array pode ser criado vazio ou com algum elemento dentro.
const listaDeCompras = [];
const listaDeCompras2 = ['arroz', 'feijao', 10, true, 9]


//quando criado sem elementos ele retorna o [] vazio
console.log(listaDeCompras);
// output: []


//assim voce pode adicionar elementos ou sobrescrever elementos de um indice especifico
listaDeCompras[0] = "arroz";
listaDeCompras[1] = "feijao";
listaDeCompras[2] = 10;
listaDeCompras[3] = true;
console.log(listaDeCompras);
// aqui retorna a lista completa com todos os elementos
//output: [ 'arroz', 'feijao', 10, true ]


//nota que aqui pulamos do indice 3 para o 9, nao a problema em fazer isso mas ira ficar
//do indice 4 aou 8 vazio ou seja undefined
listaDeCompras[9] = 9
console.log(listaDeCompras);
//aqui irar retornar a lista completa mas com  5 itens vazios (indice 4 a 8)
//output: [ 'arroz', 'feijao', 10, true, <5 empty items>, 9 ]


//aqui ele retorna somente o elemento do indice selecionado
console.log(listaDeCompras[3]);
//output: true


// aqui retorna undefined pois nao criamos o item de indice 10
console.log(listaDeCompras[10]);


