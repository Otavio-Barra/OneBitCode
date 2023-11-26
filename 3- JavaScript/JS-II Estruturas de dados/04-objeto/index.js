let nome = "prop"
//criar obj vazio
let objeto = {}
//criar uma propriedade com notacao "."
objeto.prop = "ola mundo"
//retornar o obj inteiro
console.log(objeto);
//output: { prop: 'ola mundo' }
//retorna o valor da prorpiedade especifica
console.log(objeto.prop)
//output: ola mundo
//e possivel acessar a propriedade atravez do []
//e como o obj e dinamico ele aceita variaveis para acessar as propiedades
console.log(objeto[nome]);
//output: ola mundo
//comparacao de diferentes jeitos de acessar as propriedades
console.log(objeto.prop === objeto[nome]);
console.log(objeto.prop === objeto['prop']);
//output: true

//teste do dinamismo
let funcao = "log"
console[funcao]("ola mundo")
//output: ola mundo


//teste pratico
//criacao do objeto com {}
const pessoa = {
    nome: "otavio",
    idade: 21
}
console.log(pessoa);
//output:{ nome: 'otavio', idade: 21 }

//adicionando com notacao ponto
//dentro do objeto ele armazena qualquer coisa ate array e outro objeto
pessoa.colegas = ["jeven", "vitin", "lucas"]
pessoa.endereco = {
    rua: "gil barone",
    numero: 0,
    bairro: "gironda"
}
console.log(pessoa);
/*output:{
  nome: 'otavio',
  idade: 21,
  colegas: [ 'jeven', 'vitin', 'lucas' ],
  endereco: { rua: 'gil barone', numero: 0, bairro: 'gironda' }
}*/

const nomeDaPropriedade = "colegas"
//pode se referenciar as propeiedades com variaveis
console.log(pessoa[nomeDaPropriedade]);
//output:[ 'jeven', 'vitin', 'lucas' ]

//para acessar um objeto dentro de outro objeto pode ser pela notacao ponto
console.log(pessoa.endereco.bairro);
//output: gironda