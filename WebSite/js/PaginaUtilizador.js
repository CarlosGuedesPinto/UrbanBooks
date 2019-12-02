let userId = 1
let utilizadores = []
let requisicoes = []
let livros = []
let contRequisicoes = 0


window.onload = function() {
    for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem("utilizadores")) {
            /*VAi buscar todos os utilizadores*/
            utilizadores = (JSON.parse(localStorage.getItem("utilizadores")))

        }

        if (localStorage.getItem("requisições")) {

            livros = (JSON.parse(localStorage.getItem("livros")))

        }

        //if (localStorage.getItem("userLogged")) {

            //userId = (JSON.parse(localStorage.getItem("userLogged")))

        //}
        if (localStorage.getItem("requisicoes")) {
            /*VAi buscar todos os utilizadores*/
            requisicoes = (JSON.parse(localStorage.getItem("requisicoes")))

        }

    }
    let divMulta = document.getElementById("divMulta")
    let tblRequisicoes = document.getElementsByClassName("tblRequisicoes")
    atualizarUtilizador()
    
    renderizarTabelaRequisicoes()

}
function atualizarUtilizador() {
    let divUtilizador = document.getElementById("divUtilizador")
    

    divUtilizador.innerHTML = ""
    let strHtmlUtilizador = ""

    for (let i = 0; i < utilizadores.length; i++) {
        if(utilizadores[i]._id == userId){
            alert("oi")
            strHtmlUtilizador = "<img src='"+ utilizadores[i]._foto +"' alt='utilizador'>"
            +"<h2>"+utilizadores[i]._nome+"</h2>"
            +"<b>Email:</b><p>"+utilizadores[i]._email+"</p>"
            +"<b>Password</b><p>"+utilizadores[i]._pass+"</p>"
            +"<b>Tipo:</b><p>"+utilizadores[i]._tipo+"</p>"
        }
        
    }
    divUtilizador.innerHTML += strHtmlUtilizador
}

function renderizarTabelaRequisicoes() {
    let strHtmlRequisicoes = ""
    tblRequisicoes.innerHTML = ""
    tblRequisicoes.innerHTML = "<table class='table'>"
    +"<thead>"
    +"<tr>"
    +"<th>Data de requisiçao:</th>"
    +"<th>Data de entrega:</th>"
    +"<th></th>"
    +"</tr>"
    +"</thead>"
    for (let i = 0; i < requisicoes.length; i++) {
        if (requisicoes[i]._idUser == userId) {
            tblRequisicoes.innerHTML += "<tbody>"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"<td></td>"
            +"</tr>"
        }
        
    }
}