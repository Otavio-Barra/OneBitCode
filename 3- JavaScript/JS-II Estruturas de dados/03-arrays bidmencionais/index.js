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
/*output:[
  '1º Nível',
  [ '2º nível', 42, true ],
  [
    [ '3º nível, 1º item', 'Olá, mundo!' ],
    [ '3º nível, 2º item', 'Oi, mundo!' ]
  ],
  []
]*/

//acesso ao array normal
// console.log(arr[0]);
//ouput: 1º Nível

//acessando elemento no segundo nivel do array
// console.log(arr[1]);
// console.log(arr[1][0]);
//noa que e so encadear um colchete ao lado do outro
//output  1: [ '2º nível', 42, true ]
//output 2: 2º nível

//acessando o terceiro nivel de dentro do array
// console.log(arr[2][1][0]);
//output: 3º nível, 1º item


const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

// console.table(matriz)
//output: 
/*┌─────────┬──────────┬──────────┬──────────┬──────────┐
  │ (index) │    0     │    1     │    2     │    3     │
  ├─────────┼──────────┼──────────┼──────────┼──────────┤
  │    0    │ 'l1, c1' │ 'l1, c2' │ 'l1, c3' │ 'l1, c4' │
  │    1    │ 'l2, c1' │ 'l2, c2' │ 'l2, c3' │ 'l2, c4' │
  │    2    │ 'l3, c1' │ 'l3, c2' │ 'l3, c3' │ 'l3, c4' │
  └─────────┴──────────┴──────────┴──────────┴──────────┘ */

//as outras funcoes como pop e push sao usadas normalmente
//como foi pegado a primeira camada do array sera adicionado uma nova linha a baixo do l3
matriz.push(["nova linha"])
//adicionara uma nova coluna no final da primeira linha
matriz[0].push("nova coluna")
// console.table(matriz)
/*
┌─────────┬──────────────┬──────────┬──────────┬──────────┬───────────────┐
│ (index) │      0       │    1     │    2     │    3     │       4       │
├─────────┼──────────────┼──────────┼──────────┼──────────┼───────────────┤
│    0    │   'l1, c1'   │ 'l1, c2' │ 'l1, c3' │ 'l1, c4' │ 'nova coluna' │
│    1    │   'l2, c1'   │ 'l2, c2' │ 'l2, c3' │ 'l2, c4' │               │
│    2    │   'l3, c1'   │ 'l3, c2' │ 'l3, c3' │ 'l3, c4' │               │
│    3    │ 'nova linha' │          │          │          │               │
└─────────┴──────────────┴──────────┴──────────┴──────────┴───────────────┘
 */


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
/*
output:[ 'l1, c1', 'l1, c2', 'l1, c3', 'l1, c4', 'nova coluna' ]
Posicao: (0, 0) Valor: l1, c1
Posicao: (0, 1) Valor: l1, c2
Posicao: (0, 2) Valor: l1, c3
Posicao: (0, 3) Valor: l1, c4
Posicao: (0, 4) Valor: nova coluna
[ 'l2, c1', 'l2, c2', 'l2, c3', 'l2, c4' ]
Posicao: (1, 0) Valor: l2, c1
Posicao: (1, 1) Valor: l2, c2
Posicao: (1, 2) Valor: l2, c3
Posicao: (1, 3) Valor: l2, c4
[ 'l3, c1', 'l3, c2', 'l3, c3', 'l3, c4' ]
Posicao: (2, 0) Valor: l3, c1
Posicao: (2, 1) Valor: l3, c2
Posicao: (2, 2) Valor: l3, c3
Posicao: (2, 3) Valor: l3, c4
[ 'nova linha' ]
Posicao: (3, 0) Valor: nova linha
 */