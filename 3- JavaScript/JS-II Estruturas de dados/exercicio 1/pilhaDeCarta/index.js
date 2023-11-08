/*Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo a 
quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, 
“Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o 
nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve 
retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/



let menu = ""
const cartas = []


do {
    menu = prompt(`Bem vindo\nQuantidade de cartas ate o momento: ${cartas.length}\n1- Adicionar carta\n2- Puxar carta\n3- Sair`)
    switch (menu) {
        case "1":
            const nomeDaCarta = prompt("informe o nome da carta")
            cartas.push(nomeDaCarta)
            break
        case "2":
            const cartaTirada = cartas.pop()
            alert(`A carta removida foi ${cartaTirada}`)
            break
        case "3":
            alert("ate breve")
            break
        default:
            alert("opcao invalida")
    }
} while (menu !== "3");