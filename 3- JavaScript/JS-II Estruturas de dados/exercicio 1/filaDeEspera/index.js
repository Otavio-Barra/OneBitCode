/*Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente 
ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da 
fila e mostra na tela o nome do paciente consultado, e “Sair”. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

// contruir menu interativo
//mostrar lista dos pacientes mostrando posicao e nome no menu
//opcoes do menu (novo paciente, consultar paciente, sair)

//novo paciente: adiciona mais um nome no final da lista
//consultar paciente : retira o primeiro paciente da lista e mostra seu nome

const pacientes = []
let menu = ""

do {

    let listaEspera = ""
    for (let i = 0; i < pacientes.length; i++) {
        listaEspera += `${i + 1}º ${pacientes[i]}\n`
    }

    menu = prompt(`Sala de espera\nPacientes: ${listaEspera}\n1- Novo paciente\n2- Consultar paciente\n3- sair`)

    if (menu === '1') {
        const novoPaciente = prompt('digite o nome do paciente')
        pacientes.push(novoPaciente)

    } else if (menu === "2") {
        const pacienteConsultado = pacientes.shift()
        alert(`o paciente ${pacienteConsultado} saiu da fila.`)
    } else if (menu === "3") {
        break
    }
} while (true);