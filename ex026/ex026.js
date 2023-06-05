var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}
console.log(listaUsuarios);
exibirUsuariosVetor()

function cadastrarUsuario() {
    var nome = document.getElementById("inp").value
    var usuario = document.getElementById("inp2").value
    var senha = document.getElementById("inp3").value
    var confirmarS = document.getElementById("inp4").value

    var possoC = preencherCadastro(nome, usuario, senha, confirmarS)
    if (possoC == false) {
        return
    }
    if (senha != confirmarS) {
        alert("senhas são diferentes")
    } else {
        document.getElementById("resultados").innerHTML +=
            `<br> <strong>nome: </strong>${nome} - <strong>login: </strong> ${usuario} `
    }

    var objUsuario = {
        nome: nome,
        senha: senha,
        usuario: usuario
    }
    listaUsuarios.push(objUsuario)
    localStorage.setItem('bdUsuarios', JSON.stringify(listaUsuarios))

    exibirUsuariosVetor()
    document.getElementById("inp").value = ''
    document.getElementById("inp2").value = ''
    document.getElementById("inp3").value = ''
    document.getElementById("inp4").value = ''
    document.getElementById("inp").focus()
}

function preencherCadastro(nome, usuario, senha, confirmarS) {
    if (nome == '' || usuario == '' || senha == '' || confirmarS == '') {
        alert("e obrigatorio preencher todos os campos")
        return false
    } else {
        if (senha == confirmarS) {
            return true
        } else {
            alert("verifique suas senhas se estão corretas! ")
            return false
        }
    }
}

//login 

function login() {
    var usuario = document.getElementById("inp2").value
    var senha = document.getElementById("inp3").value

    var encontrado = false
    listaUsuarios.forEach((item, i) => {
        if (usuario == item.usuario && senha == listaUsuarios[i].senha) {
            alert("login acessado com sucesso")
            encontrado = true
        }
    })
    if (encontrado == false)
        alert("usuario ou senha não encontrada")
}


function exibirUsuariosVetor() {
    document.getElementById('resultados').innerHTML = ''

    listaUsuarios.forEach((item, pos) => {
        document.getElementById('resultados').innerHTML +=
            `<br> <strong>nome: </strong>${item.nome} - <strong>login: </strong> ${item.usuario}
    <img src='excluir.svg' onclick="limparUsuario(${pos})"> `
    })
}

function limparUsuario(pos){
    var confirmarExclusao = confirm('deseja realmente excluir este usuario?')
    if (confirmarExclusao == true){
    listaUsuarios.splice(pos, 1)
    localStorage.setItem('bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuariosVetor()
}
}


function limpar() {
    listaUsuarios = []
    localStorage.setItem('bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuariosVetor()
}

function botaoCadastrar() {
    location.href = "ex026.html"
}


