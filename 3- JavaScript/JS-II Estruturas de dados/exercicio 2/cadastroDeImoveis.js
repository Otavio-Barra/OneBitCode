/*## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:


- O menu também deve ter a opção de mostrar todos os imóveis salvos. */

let menu
const arrayImoveis = []

do {
    menu = prompt(`Bem vindo ao cadastro de imoveis\nTotal de imoveis: ${arrayImoveis.length}\n1- Salvar imovel\n2- Mostrar imoveis`)
    if (menu === "1") {
        let imovel = {}
        imovel.proprietario = prompt("Nome do proprietario do imovel?")
        imovel.quartos = prompt("quantos quartos?")
        imovel.banheiros = prompt("quantos banheiros?")
        imovel.garagem = prompt("possui garagem?")

        const confirmarImovel = confirm(`Salvar este imóvel?\n\nProprietário:   ${imovel.proprietario}\nQuartos:   ${imovel.quartos}\nBanheiros:   ${imovel.banheiros}\nPossui Garagem   ${imovel.garagem}`)
        if (confirmarImovel) {
            arrayImoveis.push(imovel)
        }
    } else if (menu === "2") {
        for (let i = 0; i < arrayImoveis.length; i++) {
            alert(`Imovel: ${(i + 1)}\n \nProprietário: ${arrayImoveis[i].proprietario}\nQuartos: ${arrayImoveis[i].quartos}\nBanheiros: ${arrayImoveis[i].banheiros} \nPossui Garagem ${arrayImoveis[i].garagem}`)
        }
    } else if (menu === "3") {
        alert("ate mais")
    } else {
        alert("opcao invalida")
    }

} while (menu !== "3");


