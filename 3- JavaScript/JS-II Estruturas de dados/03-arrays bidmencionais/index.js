//isso e um array bidimencional
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
        ["3º nível, 1º item", "Olá, mundo!"],
        ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[1][0]);
// console.log(arr[2][1][0]);

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
// console.table(matriz)

//as outras funcoes como pop e push sao usadas normalmente
//como foi pegado a primeira camada do array sera adicionado uma nova linha a baixo do l3
// matriz.push(["nova linha"])
//adicionara uma nova coluna no final da primeira linha
// matriz[0].push("nova coluna")
// console.table(matriz)


/*para iterar o array bidimencional */
/*para acessar a matriz mais interna tem que colocar a posicao que o primeiro for esta percorrendo*/
for (let indexArrayTodo = 0; indexArrayTodo < matriz.length; indexArrayTodo++) {
    console.log(matriz[indexArrayTodo]);
    for (let indexArrayMaisInterno = 0; indexArrayMaisInterno < matriz[indexArrayTodo].length; indexArrayMaisInterno++) {
        const elemento = matriz[indexArrayTodo][indexArrayMaisInterno]
        console.log(`Posicao: (${indexArrayTodo}, ${indexArrayMaisInterno}) Valor: ${elemento}`)
    }
}
/*quando a um for dentro do outro ele executa o primeiro for ate chegar no mais interno,
dps executa o mais interno inteiro para ai sim sair e voltar para o for principal, e repetindo isso ate acabar*/