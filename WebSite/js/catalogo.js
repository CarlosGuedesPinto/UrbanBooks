let userId = 0
let userAtual = ""
let livros = []
let categorias = []
let ratings = []
let tags = []
let utilizadores = []
let userTipo = ""
class Utilizador {

    constructor(nome, tipo, email, pass, multa, foto) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        this._id = Utilizador.getLastId() + 1
        this.nome = nome
        this.tipo = tipo
        this.email = email
        this.pass = pass
        this.multa = multa
        this.foto = foto

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get nome() {
        return this._nome
    }

    set nome(newNome) {
        this._nome = newNome
    }

    get email() {
        return this._email
    }

    set email(newEmail) {
        this._email = newEmail
    }

    get tipo() {
        return this._tipo
    }

    set tipo(newTipo) {
        this._tipo = newTipo
    }

    get pass() {
        return this._pass
    }

    set pass(newPass) {
        this._pass = newPass
    }

    get multa() {
        return this._multa
    }

    set multa(newMulta) {
        this._multa = newMulta
    }

    get foto() {
        return this._foto
    }

    set foto(newFoto) {
        this._foto = newFoto
    }

    static getLastId() {
        let lastId = 0
        if (utilizadores.length != 0) {
            lastId = utilizadores[utilizadores.length - 1]._id
        }

        return lastId
    }

}


window.onload = function (event) {
    if (localStorage.getItem("userLogged")) {

        userId = (JSON.parse(localStorage.getItem("userLogged")))
        console.log("userId - " + userId)

    }
    if (localStorage.getItem("utilizadores")) {

        utilizadores = (JSON.parse(localStorage.getItem("utilizadores")))


    }
    //Irá atualizar a navbar dependendo se um utilizador está autenticado ou não
    buttonsMenu()
    //Irá encher o array livros com os dados do localstorage
    if (localStorage.getItem("livros")) {

        livros = (JSON.parse(localStorage.getItem("livros")))


    }
    if (localStorage.getItem("categorias")) {

        categorias = (JSON.parse(localStorage.getItem("categorias")))


    }
    if (localStorage.getItem("tags")) {

        tags = (JSON.parse(localStorage.getItem("tags")))


    }
    if (localStorage.getItem("ratings")) {

        ratings = (JSON.parse(localStorage.getItem("ratings")))


    }

    home()
    adicionarCatNoSelect()
    adicionarTagSelect()
    atualizarCatalogo()

    let filtrarLivros = document.getElementById("btnFiltrar")
    filtrarLivros.addEventListener("click", function (event) {
        let generoLivro = document.getElementById("generoLivro")
        let tagsLivro = document.getElementById("tagsLivro")
        let estadoLivro = document.getElementById("estadoLivro")

        atualizarCatalogo(generoLivro.value, tagsLivro.value, estadoLivro.value)
        event.preventDefault()
    })



}


function atualizarCatalogo(generoLivro = "", tagslivro = "", estadoLivro = "") {
    let gridLivros = document.getElementsByClassName("col-sm-2")

    let cont = 0

    for (let i = 0; i < gridLivros.length; i++) {
        gridLivros[i].innerHTML = ""

    }

    for (let i = 0; i < livros.length; i++) {

        if ((generoLivro == "" && tagslivro == "" && estadoLivro == "") || (generoLivro == "" && tagslivro == "" && estadoLivro == livros[i]._estado) || (generoLivro == "" && livros[i]._tags.includes(tagslivro) && estadoLivro == "") || (generoLivro == livros[i]._genero && tagslivro == "" && estadoLivro == "") || (generoLivro == "" && livros[i]._tags.includes(tagslivro) && estadoLivro == livros[i]._estado) || (generoLivro == livros[i]._genero && tagslivro == "" && estadoLivro == livros[i]._estado) || (generoLivro == livros[i]._genero && livros[i]._tags.includes(tagslivro) && estadoLivro == "") || (generoLivro == livros[i]._genero && livros[i]._tags.includes(tagslivro) && estadoLivro == livros[i]._estado)) {
            gridLivros[cont].innerHTML = "<div class='card textWithBlurredBg' id=" + livros[i]._id + ">"
                + "<img src='" + livros[i]._capaImagem + "'"
                + "alt='Avatar'  style='width:100%'>"
                //+ "<h2>Rating</h2>"
                + "<h1>" + descobrirRating(livros[i]._id) + "/5</h1>"
                + "</div>"
                + "<br>"
                + "<br>"
            cont++
        }
    }

    let seeCard = document.getElementsByClassName('card')

    for (let i = 0; i < seeCard.length; i++) {

        seeCard[i].addEventListener("click", function () {

            localStorage.setItem("livrosMais", seeCard[i].id)

            window.open("requisitarLivro.html", "_self")

        })
    }





}
function adicionarCatNoSelect() {
    let generoLivro = document.getElementById("generoLivro")

    //opcaoCategoriasModal.innerHTML = ""
    /*Mter todos os generos e tags nas opceos*/
    for (let i = 0; i < categorias.length; i++) {

        generoLivro.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"
        //opcaoCategoriasModal.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"

    }

}

function adicionarTagSelect() {

    let tagslivro = document.getElementById("tagsLivro")



    for (let i = 0; i < tags.length; i++) {

        tagsLivro.innerHTML += "<option value=" + tags[i]._tagNome + ">" + tags[i]._tagNome + "</option>"

    }

}
function buttonsMenu() {

    let btnLogin = document.getElementById("btnLogin")
    let btnRegisto = document.getElementById("btnRegisto")
    let btnLogout = document.getElementById("btnLogout")
    //let btnCatalogo = document.getElementById("btnCatalogo")
    let btnBackOffice = document.getElementById("btnBackOffice")
    let btnDoarLivros = document.getElementById("btnDoarLivros")
    let formLogin = document.getElementById("formLogin")
    let formRegisto = document.getElementById("formRegisto")
    let notificationButton = document.getElementById("dropdownMenuButton")
    let localImg = document.getElementById("localImg")

    if (userId == 0) {
        btnLogout.style.display = "none";
        btnBackOffice.style.display = "none";
        btnDoarLivros.style.display = "none";
        //btnCatalogo.style.display = "none";
        notificationButton.style.display = "none";
        localImg.style.display = "none"
    }
    else {
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnLogout.style.display = 'block'
        //btnCatalogo.style.display = "block";
        notificationButton.style.display = "block";
        localImg.style.display = "block"

    }
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i]._id == userId) {
            userTipo = utilizadores[i]._tipo
            break
        }
    }
    console.log(userTipo)
    if (userTipo == "0") {
        btnBackOffice.style.display = 'block'
    }
    else if (userTipo == "1") {
        btnDoarLivros.style.display = 'block'
    }

    formLogin.addEventListener("submit", function () {
        // Obter as referências para as caixas de texto
        let inputLoginEmail = document.getElementById("inputLoginEmail")
        let inputLoginPassword = document.getElementById("inputLoginPassword")
        // Iterar sobre o array e verificar se o utilizador já existe
        let userExists = false
        let userName = ""
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._email == inputLoginEmail.value && utilizadores[i]._pass == inputLoginPassword.value) {
                userExists = true
                userId = utilizadores[i]._id
                userType = utilizadores[i]._tipo
                userName = utilizadores[i]._name
                userOp = utilizadores[i]._idBiblio
                userAtual = userName

                break
            }
        }

        // Se sim, autenticar utilizador
        if (userExists == true) {

            localStorage.setItem("userLogged", userId)
            localStorage.setItem("userIdBiblio", userOp)
            alert("Autenticação efetuado com sucesso!!")
            // Fechar a modal
            $('#loginModal').modal('hide')
            // Alterar navbar
            btnLogin.style.display = 'none'
            btnRegisto.style.display = 'none'
            btnLogout.style.display = 'block'
            //btnCatalogo.style.display = "block";
            notificationButton.style.display = "block";
            localImg.style.display = "block"

            if (userType == "0") {
                btnBackOffice.style.display = 'block'
            }
            else if (userType == "1") {
                btnDoarLivros.style.display = 'block'
            }

            /*Meter Nome Usuario e Foto Na Pag*/
            let nomeUsuario = document.getElementById("nomeUsuario")

        } else {
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!!")
        }
        event.preventDefault()

    })

    btnLogout.addEventListener("click", function () {
        userId = 0
        localStorage.removeItem("userLogged")
        btnLogin.style.display = 'block'
        btnRegisto.style.display = 'block'
        btnLogout.style.display = 'none'
        btnDoarLivros.style.display = 'none'
        btnBackOffice.style.display = 'none'
        //btnCatalogo.style.display = 'none'
        notificationButton.style.display = "none";
        localImg.style.display = "none"
    })

    formRegisto.addEventListener("submit", function () {

        let inputPassword1 = document.getElementById("inputPassword1")
        let inputPassword2 = document.getElementById("inputPassword2")
        let inputImage = document.getElementById("inputImage")
        let strError = ""

        console.log(inputPassword1.value)
        console.log(inputPassword2.value)

        if (inputPassword1.value != inputPassword2.value) {
            strError = "As passwords têm de ser iguais"
        }

        // 2. Validar se já existe um user com o mesmo email
        let inputEmail = document.getElementById("inputEmail")
        let userExist = false
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._email == inputEmail.value) {
                userExist = true
            }
        }

        if (userExist == true) {
            strError += "\nEmail já existente!"
        }

        // 3. Criar o utilizador
        if (strError == "") {
            let inputName = document.getElementById("inputName")
            let newUser = new Utilizador(inputName.value, "2", inputEmail.value, inputPassword1.value, "0", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rui_Patr%C3%ADcio_2017.jpg/250px-Rui_Patr%C3%ADcio_2017.jpg")
            // 4. Adicionar ao array
            utilizadores.push(newUser)
            userId = newUser.id
            console.log()
            // 5. Alerta de sucesso!
            alert("Registo efetuado com sucesso!!")
            // 6. Fechar a modal
            $('#registoModal').modal('hide')
            // 7. ALterar navbar

            btnLogin.style.display = 'none'
            btnRegisto.style.display = 'none'
            btnLogout.style.display = 'block'
            //btnCatalogo.style.display = 'block'
            notificationButton.style.display = "block";
            localImg.style.display = "block"

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

            /*Meter Nome Usuario e Foto Na Pag*/
            let nomeUsuario = document.getElementById("nomeUsuario")

        } else {
            alert(strError)
            formRegisto.reset()
            inputName.focus()
        }
        event.preventDefault()
    })




}
function descobrirRating(idLivro) {

    for (let i = 0; i < ratings.length; i++) {

        if (ratings[i]._idLivro == idLivro) {

            return (ratings[i]._classi)

        }

    }

}

function home() {

    let butHome = document.getElementById("home")

    butHome.addEventListener("click", function() {

        window.open("../index.html","_self")

    })

}