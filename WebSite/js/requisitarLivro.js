let utilizadores = []
let userId = 0
let userType = ""
let userAtual = ""
let userOp = ""
let livros = []
let requisicoes = []
let coments = []
let notificacoes = []
let bibliotecas = []
let ratings = []
let userTipo

class Rating {

    constructor(idLivro, classi = 3) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        this.idLivro = idLivro
        this.classi = classi


    }

    get idLivro() {
        return this._idLivro
    }

    set idLivro(newIdLivro) {
        this._idLivro = newIdLivro
    }

    get classi() {
        return this._classi
    }

    set classi(newClassi) {
        this._classi = newClassi
    }

}

class Notificacao {

    constructor(idLivro, tituloLivro, linkCapa, idUtilizador, tipo) {

        this._id = Notificacao.getLastId() + 1
        this.idLivro = idLivro
        this.tituloLivro = tituloLivro
        this.linkCapa = linkCapa
        this.idUtilizador = idUtilizador
        this.tipo = tipo

    }

    get idLivro() {
        return this._idLivro
    }

    set idLivro(newIdLivro) {
        this._idLivro = newIdLivro
    }

    get tituloLivro() {
        return this._tituloLivro
    }

    set tituloLivro(newTituloLivro) {
        this._tituloLivro = newTituloLivro
    }

    get linkCapa() {
        return this._linkCapa
    }

    set linkCapa(newLinkCapa) {
        this._linkCapa = newLinkCapa
    }

    get tipo() {
        return this._tipo
    }

    set tipo(newTipo) {
        this._tipo = newTipo
    }

    get idUtilizador() {
        return this._idUtilizador
    }

    set idUtilizador(newIdUtilizador) {
        this._idUtilizador = newIdUtilizador
    }

    static getLastId() {
        let lastId = 0
        if (notificacoes.length != 0) {
            lastId = notificacoes[notificacoes.length - 1]._id
        }

        return lastId
    }
}


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

class Requisicao {

    constructor(idUser, idLivro, dataAtual, dataLimite) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        this._id = Requisicao.getLastId() + 1
        this.idUser = idUser
        this.idLivro = idLivro
        this.dataAtual = dataAtual
        this.dataLimite = dataLimite

    }

    get idUser() {
        return this._idUser
    }

    set idUser(newIdUser) {
        this._idUser = newIdUser
    }

    get idLivro() {
        return this._idLivro
    }

    set idLivro(newIdLivro) {
        this._idLivro = newIdLivro
    }

    get dataAtual() {
        return this._dataAtual
    }

    set dataAtual(newDataAtual) {
        this._dataAtual = newDataAtual
    }

    get dataLimite() {
        return this._dataLimite
    }

    set dataLimite(newDataLimite) {
        this._dataLimite = newDataLimite
    }

    static getLastId() {
        let lastId = 0
        if (requisicoes.length != 0) {
            lastId = requisicoes[requisicoes.length - 1]._id
        }

        return lastId
    }

}

class Coment {

    constructor(idUser, idLivro, comentario, rating) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        this._id = Coment.getLastId() + 1
        this.idUser = idUser
        this.idLivro = idLivro
        this.comentario = comentario
        this.rating = rating

    }

    get idUser() {
        return this._idUser
    }

    set idUser(newIdUser) {
        this._idUser = newIdUser
    }

    get idLivro() {
        return this._idLivro
    }

    set idLivro(newIdLivro) {
        this._idLivro = newIdLivro
    }

    get comentario() {
        return this._comentario
    }

    set comentario(newComentario) {
        this._comentario = newComentario
    }

    get rating() {
        return this._rating
    }

    set rating(newRating) {
        this._rating = newRating
    }

    static getLastId() {
        let lastId = 0
        if (coments.length != 0) {
            lastId = coments[coments.length - 1]._id
        }

        return lastId
    }

}

class Livro {

    constructor(titulo, capaImagem, descricao, autores, dataLancamento, genero, tags, editora, nPaginas, estado, idBiblio, id) {
        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        if (id == null) {
            this.id = Livro.getLastId() + 1
        }
        else {
            this.id = id
        }

        this.titulo = titulo
        this.capaImagem = capaImagem
        this.descricao = descricao
        this.autores = autores
        this.dataLancamento = dataLancamento
        this.genero = genero
        this.tags = tags
        this.editora = editora
        this.nPaginas = nPaginas
        this.estado = estado

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get titulo() {
        return this._titulo
    }

    set titulo(newTitulo) {
        this._titulo = newTitulo
    }

    get capaImagem() {
        return this._capaImagem
    }

    set capaImagem(newCapaImagem) {
        this._capaImagem = newCapaImagem
    }

    get descricao() {
        return this._descricao
    }

    set descricao(newDescricao) {
        this._descricao = newDescricao
    }

    get autores() {
        return this._autores
    }

    set autores(newAutores) {
        this._autores = newAutores
    }

    /*get multa() {
        return this._multa
    }*/

    get dataLancamento() {
        return this._dataLancamento
    }

    set dataLancamento(newDataLancamento) {
        this._dataLancamento = newDataLancamento
    }

    get genero() {
        return this._genero
    }

    set genero(newGenero) {
        this._genero = newGenero
    }

    get tags() {
        return this._tags
    }

    set tags(newTags) {
        this._tags = newTags
    }

    get editora() {
        return this._editora
    }

    set editora(newEditora) {
        this._editora = newEditora
    }

    get nPaginas() {
        return this._nPaginas
    }

    set nPaginas(newNPaginas) {
        this._nPaginas = newNPaginas
    }

    get estado() {
        return this._estado
    }

    set estado(newEstado) {
        this._estado = newEstado
    }

    get idBiblio() {
        return this._idBiblio
    }

    set idBiblio(newIdBiblio) {
        this._idBiblio = newIdBiblio
    }

    static getLastId() {
        let lastId = 0
        if (livros.length != 0) {
            lastId = livros[livros.length - 1]._id
        }
        return lastId
    }

}

window.onload = function () {

    for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem("utilizadores")) {
            /*VAi buscar todos os utilizadores*/
            utilizadores = (JSON.parse(localStorage.getItem("utilizadores")))

        }

        if (localStorage.getItem("ratings")) {
            /*VAi buscar todos os utilizadores*/
            ratings = (JSON.parse(localStorage.getItem("ratings")))

        }

        if (localStorage.getItem("bibliotecas")) {

            bibliotecas = (JSON.parse(localStorage.getItem("bibliotecas")))

        }

        if (localStorage.getItem("categorias")) {

            categorias = (JSON.parse(localStorage.getItem("categorias")))

        }


        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem("tags")))

        }

        if (localStorage.getItem("livros")) {

            livros = (JSON.parse(localStorage.getItem("livros")))

        }

        if (localStorage.getItem("coments")) {

            coments = (JSON.parse(localStorage.getItem("coments")))

        }

        if (localStorage.getItem("requisicoes")) {

            requisicoes = (JSON.parse(localStorage.getItem("requisicoes")))

        }

        if (localStorage.getItem("notificacoes")) {

            notificacoes = (JSON.parse(localStorage.getItem("notificacoes")))

        }
        if (localStorage.getItem("userLogged")) {

            userId = localStorage.getItem("userLogged")

        }

    }

    requiButton()
    inserirComentRating()
    buttonsMenu()
    mostrarLivro()

    btnRequisitar.addEventListener("click", function () {

        let userId = localStorage.getItem("userLogged")
        let livroId = localStorage.getItem("livrosMais")

        let livrosRequisitados = 0

        for (let k = 0; k < requisicoes.length; k++) {

            if (requisicoes[k]._userId == userId) {

                livrosRequisitados++

            }

        }

        if (livrosRequisitados <= 2) {

            for (let i = 0; i < utilizadores.length; i++) {

                if (userId == utilizadores[i]._id) {

                    if (utilizadores[i]._multa == 0) {

                        let newRequisicao = new Requisicao(userId, livroId, atualData(), dataLimite())
                        requisicoes.push(newRequisicao)

                        localStorage.removeItem("requisicoes")

                        localStorage.setItem("requisicoes", JSON.stringify(requisicoes))

                        for (let h = 0; h < livros.length; h++) {

                            if (livros[h]._id == livroId) {



                                //livros[h]._disponibilidade = "0"

                                localStorage.removeItem("livros")

                                localStorage.setItem("livros", JSON.stringify(livros))


                            }

                        }
                    }

                }

            }

        }

    })

    btnEnviarComent.addEventListener("click", function () {

        let userId = localStorage.getItem("userLogged")
        let livroId = localStorage.getItem("livrosMais")
        let comentario = document.getElementById("comentuti").value
        let rating = document.getElementById("rating").value
        let strError = ""

        for (let i = 0; i < coments.length; i++) {

            if (coments[i]._userId == userId) {

                strError += "Você já comentou sobre este Livro!"
                break
            }

        }

        if (strError != "") {

            alert(strError)

        }
        else {

            let newComent = new Coment(userId, livroId, comentario, rating)
            coments.push(newComent)

            localStorage.removeItem("coments")

            localStorage.setItem("coments", JSON.stringify(coments))

        }

        /*rating media*/
        for (let k = 0; k < ratings.length; k++) {

            if (ratings[k]._idLivro == livroId) {

                alert("OLA")

                ratings[k]._classi = (ratings[k]._classi + rating) / 2

            }

        }

        localStorage.removeItem("ratings")

        localStorage.setItem("ratings", JSON.stringify(ratings))

    })

}

function requiButton() {

    btnRequisitar.style.display = "none"
    if (localStorage.getItem("userLogged")) {
        btnRequisitar.style.display = "block"
    }

}

function buttonsMenu() {

    let btnLogin = document.getElementById("btnLogin")
    let btnRegisto = document.getElementById("btnRegisto")
    let btnLogout = document.getElementById("btnLogout")
    let btnCatalogo = document.getElementById("btnCatalogo")
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
        btnCatalogo.style.display = "none";
        btnRequisitar.style.display = "none"
        
    }
    else{
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnLogout.style.display = 'block'
        btnCatalogo.style.display = "block";
        btnRequisitar.style.display = "block"
        

    }
    
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i]._id == userId) {
            userTipo = utilizadores[i]._tipo
            
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
            btnCatalogo.style.display = "block";
            btnRequisitar.style.display = "block"
            

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
        btnCatalogo.style.display = 'none'
        btnRequisitar.style.display = "none"
        
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
            btnCatalogo.style.display = 'block'
            btnRequisitar.style.display = "block"

            

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

function mostrarLivro() {

    let livroId = localStorage.getItem("livrosMais")

    //let imgSrc = document.getElementById("imgSrc")  
    let titulo = document.getElementById("titulo")
    let genero = document.getElementById("generoLivro")
    let data = document.getElementById("data")
    let desc = document.getElementById("desc")
    let estado = document.getElementById("estado")
    let tags = document.getElementById("tags")
    let biblio = document.getElementById("biblioLivro")
    let nomeBiblio

    for (let i = 0; i < livros.length; i++) {

        if (livros[i]._id == livroId) {

            imgSrc.src = livros[i]._capaImagem

            titulo.innerHTML = livros[i]._titulo
            genero.innerHTML = livros[i]._genero
            data.innerHTML = livros[i]._dataLancamento
            desc.innerHTML = livros[i]._descricao

            for (let k = 0; k < bibliotecas.length; k++) {

                if (bibliotecas[k]._id == livros[i]._idBiblio) {

                    nomeBiblio = bibliotecas[k]._morada

                }

            }

            biblio.innerHTML = nomeBiblio

            if (livros[i]._estado == "2") {
                estado.innerHTML = "Bom"
            }
            if (livros[i]._estado == "1") {
                estado.innerHTML = "Aceitável"
            }
            if (livros[i]._estado == "0") {
                estado.innerHTML = "Mau"
            }

            tags.innerHTML = livros[i]._tags

        }

    }

}

function atualData() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy
    return (today)

}

function dataLimite() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + (dd + 4) + '/' + yyyy
    return (today)
}

function inserirComentRating() {

    let livroId = localStorage.getItem("livrosMais")
    let div = document.getElementById("right")
    let strHTML = ""
    let nomeUti = ""

    div.innerHTML = ""

    for (let i = 0; i < coments.length; i++) {

        if (coments[i]._idLivro == livroId) {

            for (let k = 0; k < utilizadores.length; k++) {

                if (utilizadores[k]._id == coments[i]._idUser) {

                    nomeUti = utilizadores[k]._nome

                }

            }

            strHTML += "<div class='coment'>" +
                "<h1>" + nomeUti + "</h1>" +
                "<p>" + coments[i]._comentario + "</p>" +
                "<h2>" + coments[i]._rating + "</h2>" +
                "</div>"

        }

    }

    div.innerHTML = strHTML


}
