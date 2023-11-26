function dobro(x) {
    //x => entrada de dado da função
    console.log(`o dobro de ${x} é ${x * 2}`);
}
dobro(4)
//output: o dobro de 4 e 8
dobro(5)
//output: o dobro de 4 e 8
dobro()
//output: o dobro de undefined e NaN
//undefined pois nao foi passado o parâmetro

function dizerOla(nome = "mundo") {
    // parametro = valor => significa que e um valor padrão
    console.log(`ola, ${nome}!`);
}
dizerOla('otavio')
//output: ola, otavio!
dizerOla()
//output: ola, mundo!
//nao fui passado o parâmetro então ele pegou valor padrão


function soma(a, b) {
    console.log(a + b);
}

function criarUsuario(nome, email, senha, tipo = "adm") {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario);
}
criarUsuario("otavio", "otaviombarra@gmail.com", "12334")
/*output: {
  nome: 'otavio',
  email: 'otaviombarra@gmail.com',
  senha: '12334',
  tipo: 'adm'
} */

function novoUsuario(nome, tipo = "adm", email, senha) {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario);
}
novoUsuario("otavio", "otaviombarra@gmail.com", "12334")
/*output:{
  nome: 'otavio',
  email: '12334',
  senha: undefined,
  tipo: 'otaviombarra@gmail.com'
}
como nao foi colocado nao foi colocado o parametro tipo ele pulou e deu
undefined, por isso colocar o padrao por ultimo */
novoUsuario("otavio", "admin", "otaviombarra@gmail.com", "12334")
/*output:{
  nome: 'otavio',
  email: 'otaviombarra@gmail.com',
  senha: '12334',
  tipo: 'admin'
} */

//muitos parametros atrapalham
function muitosParametros(nome, telefone, endereco, anivrsario, email, senha) {
    //.....
}
//jeito mais simples e passar um obj como parametro
function objetoComParametros(usuario) {
    return console.log(usuario);
}
const dadosUsuario = {
    nome: "otavio",
    email: "top@gmail",
    senha: "1234",
    tipo: "admn"
}
objetoComParametros(dadosUsuario)
/*output:{ nome: 'otavio', email: 'top@gmail', senha: '1234', tipo: 'admn' } */