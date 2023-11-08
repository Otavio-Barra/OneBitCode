const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr);
// output: ['Frodo',   'Sam', 'Merry',   'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']

//Adicionar Elementos
//push (adiciona elemento no final do array e retorna o tamanho do array)
let tamanho = arr.push("Boromir")
console.log(arr);
//output: ['Frodo','Sam','Merry','Pippin','Gandalf', 'Aragorn','Legolas', 'Gimli','Boromir']
console.log(tamanho);
//output: 9

//unshift (adiciona elemento no comeco do array e retorna o tamanho do array)
tamanho = arr.unshift("Otavio")
console.log(arr);
//output: ['Otavio','Frodo','Sam','Merry','Pippin','Gandalf', 'Aragorn','Legolas', 'Gimli','Boromir']
console.log(tamanho);
//output: 10


//remover elementos
//pop (remove elemento no final e retorna esse valor)
let elementoFinal = arr.pop()
console.log(arr);
//output: ['Otavio','Frodo','Sam','Merry','Pippin','Gandalf', 'Aragorn','Legolas', 'Gimli']
console.log(elementoFinal);
//output: 'Boromir'

//shift (remove no comeco do array)
elementoFinal = arr.shift()
console.log(arr);
//output: ['Frodo','Sam','Merry','Pippin','Gandalf', 'Aragorn','Legolas', 'Gimli']
console.log(elementoFinal);
//output: 'Otavio'


//Pesquisar por um elemento
//includes (se o elemento esta disponivel/incluido dentro do array)
const inclui = arr.includes("Gandalf")
const naoInclui = arr.includes("Gandalf o cinzento")
console.log(inclui);
//output: true
console.log(naoInclui);
//output: false

//indexOf (retorna o index do elemento no array)
const indice = arr.indexOf("Gandalf")
console.log(indice);
//output: 4

//cortar/dividir e concaternar/juntar
//slice (copia uma parte selecionada do array e coloca em um novo array)
const hobbits = arr.slice(0, 4)
console.log(hobbits);
//output: [ 'Frodo', 'Sam', 'Merry', 'Pippin' ]
//nota que ele nao pega o ultimo elemento

//para ele percorrer de tras para frente e so colocar um numero negativo
//o segundo paramentro e opcional
const outros = arr.slice(-4)
console.log(outros);
//output: [ 'Gandalf', 'Aragorn', 'Legolas', 'Gimli' ]
//o slice nao modifica o array

// concat (concatena/une o array)
//ele aceita mais de 1 parametro
const sociedade = hobbits.concat(outros, "Boromir", "teste", "outro array")
console.log(sociedade);
//output: ['Frodo','Sam','Merry','Pippin','Gandalf','Aragorn','Legolas','Gimli','Boromir','teste','outro array']
//sem contar que ele aceita qualquer tipo de valo strinf, numero, bolean....

//substituicao dos elementos
//splice (substituir elementos selecionados por outros elementos ou por nada)
//retorna o elemento removido (retorna uma lista de elementos)
//pode ser incerido qualquer coisas e em qualquer quantidade depois do segundo parametro
// splice("o indice do elemento", "quantos indices quer remover a partir dele", "o que deseja substituir")
const elementosRemovidos = sociedade.splice(indice, 2, 'Gandal o cinzento')
console.log(elementosRemovidos);
//output: [ 'Gandalf', 'Aragorn' ]
console.log(sociedade);
//output: ['Frodo','Sam','Merry','Pippin','Gandal o cinzento','Legolas','Gimli','Boromir','teste','outro array']

// iterar/percorrer elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(`${elemento} se encontra na posicao ${indice}`);
}
//output:
/*Frodo se encontra na posicao 0
Sam se encontra na posicao 1
Merry se encontra na posicao 2
Pippin se encontra na posicao 3
Gandal o cinzento se encontra na posicao 4
Legolas se encontra na posicao 5
Gimli se encontra na posicao 6
Boromir se encontra na posicao 7
teste se encontra na posicao 8
outro array se encontra na posicao 9 */