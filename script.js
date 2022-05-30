let textArea = document.getElementById("inputText")
let buttonAdd = document.getElementById("buttonAdd")
let elementoLista = document.querySelector("ul")

    if(localStorage.getItem("arraySalva") === ""){
        var pessoas = []
    } else{
        var pessoas = JSON.parse(localStorage.getItem("arraySalva"))
    }

function mostrarPessoas(){
    elementoLista.innerHTML = ""

    for (pessoa of pessoas){
        const elementoTarefa = document.createElement("li")
        const textoTarefa = document.createTextNode(pessoa)

        const elementoLink = document.createElement("a")
        const pos = pessoas.indexOf(pessoa)

        const linkText = document.createTextNode("X")
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute("onclick",`deletarPessoa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)

    }
}

function add(){
    if (textArea.value != ""){
        const textoTarefa = textArea.value
        pessoas.push(textoTarefa)
        textArea.value = ""

        mostrarPessoas()
        localStorage.setItem("arraySalva", JSON.stringify(pessoas))
    } else{
        window.alert('O campo está vázio!')
    }
}

function deletarPessoa(pos){
    pessoas.splice(pos,1)
    mostrarPessoas()
    localStorage.setItem("arraySalva", JSON.stringify(pessoas))
}

function limpar(){
    localStorage.setItem("arraySalva", "")
    pessoas = []
    mostrarPessoas()
}

function sortear(){
    let PL = pessoas.length
    let PS = Math.floor(Math.random() * PL) 

    if (localStorage.getItem("arraySalva") === ""){
        window.alert('O campo está vázio!')
    } else{
        window.alert(`A pessoa sorteada foi: ${pessoas[PS]}`)
    }
}
