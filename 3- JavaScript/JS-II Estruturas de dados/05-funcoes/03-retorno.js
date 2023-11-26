function calcularMedia(a, b) {
    const media = (a + b) / 2;
    //retorna o valor da variavel
    return media;
}
//pode armazenar o retorno na variavel
const resultado = calcularMedia(7, 2)
console.log(`A média é ${resultado}`);
//output: A média é 4.5

//exemplo de return
function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}
const notebook = criarProduto("notebook", 1200)
console.log(notebook);
//pode chamar retorno dentro de um log
console.log(criarProduto("notebook", 1200));
//output das duas: { nome: 'notebook', preco: 1200, estoque: 1 }

//return sem variavel
function areaRetangular(base, altura) {
    return base * altura
}
function areQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaRetangular(10, 15));
//output:150
console.log(areQuadrada(8))
//output: 64

//retorno e so um depois do return nao sera executado mais nada
function ola() {
    let texto = "..."
    return texto
    texto = "ola mundo"
}
console.log(ola())
//output: ...

//unica forma de ter mais de um retorno ja que um n interfere no outro
function deMaior(idade) {
    if (idade > 18) {
        return "maior de idade"
    } else {
        return "menor de idade"
    }
}
console.log(deMaior(20));
console.log(deMaior(16));