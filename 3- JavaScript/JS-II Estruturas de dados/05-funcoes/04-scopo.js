//escopo externo
let guerreiro = "goku"

function trnasformacao() {
    //escopo interno
    guerreiro = "goku ssj1"
}

/*variaveis de escopo externo sao utilizadas em escopos mais internos e nao o contrario */

console.log(guerreiro);
trnasformacao()
console.log(guerreiro)

function criarGuerreiro() {
    let raca = "sayajin"
}

criarGuerreiro()
//nao da para acessar raca ja que ela esta dentro da funcao
//teria que dar um return para acessar essa variavel
console.log(raca);