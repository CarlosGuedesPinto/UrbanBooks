let utilizadores = []
let userId = 0
let userType = ""
let userFoto = ""
let userOp = ""
let userAtual = ""
let livros = []
let notificacoes = []
let ratings = []

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

        if (localStorage.getItem("bibliotecas")) {

            bibliotecas = (JSON.parse(localStorage.getItem("bibliotecas")))

        }

        if (localStorage.getItem("ratings")) {

            ratings = (JSON.parse(localStorage.getItem("ratings")))

        }

        if (localStorage.getItem("userLogged")) {

            userAtual = localStorage.getItem("userLogged")

        }

        if (localStorage.getItem("categorias")) {

            categorias = (JSON.parse(localStorage.getItem("categorias")))

        }


        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem("tags")))

        }

        if (localStorage.getItem("livros")) {

            livros = (JSON.parse(localStorage.getItem("livros")))
            console.log(livros)

        }

        if (localStorage.getItem("notificacoes")) {

            notificacoes = (JSON.parse(localStorage.getItem("notificacoes")))

        }

    }

    verificarNotificacoes()

    buttonsMenu()
    Cards()
    $(function () {
        // This will select everything with the class smoothScroll
        // This should prevent problems with carousel, scrollspy, etc...
        $('.smoothScroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000); // The number here represents the speed of the scroll in milliseconds
                    return false;
                }
            }
        });
    });
}

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#previewImage').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
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
    let imgUser = document.getElementById("localImg")
    let notiUser = document.getElementById("notiUser")

    btnLogout.style.display = "none";
    btnBackOffice.style.display = "none";
    btnDoarLivros.style.display = "none";
    btnCatalogo.style.display = "none";
    imgUser.style.display = "none";
    notiUser.style.display = "none";

    if (localStorage.getItem("userLogged")) {
        userId = localStorage.getItem("userLogged")

        userType = utilizadores[userId - 1]._tipo
        userName = utilizadores[userId - 1]._name
        userOp = utilizadores[userId - 1]._idBiblio
        userFoto = utilizadores[userId - 1]._foto
        // Alterar navbar
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnLogout.style.display = 'block'
        btnCatalogo.style.display = "block";
        imgUser.style.display = "block";
        notiUser.style.display = "block";
        document.getElementById("fotoUser").src = userFoto;
        if (userType == "0") {
            btnBackOffice.style.display = 'block'
        }
        else if (userType == "1") {
            btnDoarLivros.style.display = 'block'
        }
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
                userFoto = utilizadores[i]._foto
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
            imgUser.style.display = "block";
            notiUser.style.display = "block";
            document.getElementById("fotoUser").src = userFoto;
            if (userType == "0") {
                btnBackOffice.style.display = 'block'
            }
            else if (userType == "1") {
                btnDoarLivros.style.display = 'block'
            }

        } else {
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!!")
        }
        event.preventDefault()

    })

    btnLogout.addEventListener("click", function () {
        userId = 0
        btnLogin.style.display = 'block'
        btnRegisto.style.display = 'block'
        btnLogout.style.display = 'none'
        btnDoarLivros.style.display = 'none'
        btnBackOffice.style.display = 'none'
        btnCatalogo.style.display = 'none'
        imgUser.style.display = "none";
        notiUser.style.display = "none";
        localStorage.removeItem("userLogged")
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
            btnCatalogo.style.display = "block";
            imgUser.style.display = "block";
            notiUser.style.display = "block";

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

            /*Meter Nome Usuario e Foto Na Pag*/
            document.getElementById("fotoUser").src = newUser._foto;

        } else {
            alert(strError)
            formRegisto.reset()
            inputName.focus()
        }
        event.preventDefault()
    })




}

function Cards() {
    let cards = document.getElementById("cards")
    let htmlCards = ""
    let stringCards = []
    let max = []
    let id = []
    let max1 = 0
    let max2 = 0
    let max3 = 0
    let max4 = 0
    let max5 = 0
    let id1 = 0
    let id2 = 0
    let id3 = 0
    let id4 = 0
    let id5 = 0

    /*
    for (let i = 0; i < livros.length; i++) {
        if(descobrirRating(livros[i]._id) > max1)
        {
            max1 = descobrirRating(livros[i]._id)
            id1= livros[i]._id
        } 
        else if(descobrirRating(livros[i]._id) > max2)
        {
            max2 = descobrirRating(livros[i]._id)
            id2 = livros[i]._id
        }
        else if(descobrirRating(livros[i]._id) > max3)
        {
            max3 = descobrirRating(livros[i]._id)
            id3 = livros[i]._id
        } 
        else if(descobrirRating(livros[i]._id) > max4)
        {
            max4 = descobrirRating(livros[i]._id)
            id4 = livros[i]._id
        } 
        else if(descobrirRating(livros[i]._id) > max5)
        {
            max5 = descobrirRating(livros[i]._id)
            id5 = livros[i]._id
        }
    }*/

    for (let i = 0; i < 5; i++) {

        max[i] = descobrirRating(livros[i]._id)
        id[i] = livros[i]._id

    }

    htmlCards += "<div class='col-sm'>"
        + "<div class='textWithBlurredBg card'>"
        + "<img id='" + id[1] + "' src='" + livros[id[1]]._capaImagem + "' class='seeCard'"
        + "alt='Avatar' style='width:100%'>"
        + "<h2>Rating</h2>"
        + "<h1>" + max[1] + "/5</h1>"
        + "</div>"
        + "</div>"
        + "<div class='col-sm'>"
        + "<div class='textWithBlurredBg card'>"
        + "<img id='" + id[2] + "' src='" + livros[id[2]]._capaImagem + "' class='seeCard'"
        + "alt='Avatar' style='width:100%'>"
        + "<h2>Rating</h2>"
        + "<h1>" + max[2] + "/5</h1>"
        + "</div>"
        + "</div>"
        + "<div class='col-sm'>"
        + "<div class='textWithBlurredBg card'>"
        + "<img id='" + id[3] + "' src='" + livros[id3]._capaImagem + "' class='seeCard'"
        + "alt='Avatar' style='width:100%'>"
        + "<h2>Rating</h2>"
        + "<h1>" + max[3] + "/5</h1>"
        + "</div>"
        + "</div>"
        + "<div class='col-sm'>"
        + "<div class='textWithBlurredBg card'>"
        + "<img id='" + id[4] + "' src='" + livros[id4]._capaImagem + "' class='seeCard'"
        + "alt='Avatar' style='width:100%'>"
        + "<h2>Rating</h2>"
        + "<h1>" + max[4] + "/5</h1>"
        + "</div>"
        + "</div>"
        + "<div class='col-sm'>"
        + "<div class='textWithBlurredBg card'>"
        + "<img id='" + id[5] + "' src='" + livros[id5]._capaImagem + "' class='seeCard'"
        + "alt='Avatar' style='width:100%'>"
        + "<h2>Rating</h2>"
        + "<h1>" + max[5] + "/5</h1>"
        + "</div>"
        + "</div>"
    cards.innerHTML += htmlCards

    let seeCard = document.getElementsByClassName('seeCard')

    for (let i = 0; i < seeCard.length; i++) {
        
        seeCard[i].addEventListener("click", function () {

            localStorage.setItem("livrosMais", stringCards[i])

            window.open("html/requisitarLivro.html", "_self")

        })
    }
}

function verificarNotificacoes() {

    let divNotificacoes = document.getElementById("notificacoes")

    divNotificacoes.innerHTML = ""
    let strHTML = ""

    if (userAtual != "") {

        for (let i = 0; i < notificacoes.length; i++) {

            if (notificacoes[i]._idUtilizador == userAtual) {

                if (notificacoes[i]._tipo == "livro") {
                    strHTML += "<div class='dropdown-item notification' id=notif" + notificacoes[i]._id + ">" +
                        "<img  width='50px' height='50px' src='" + notificacoes[i]._linkCapa + "'>" +
                        "<label>Novo Livro: " + notificacoes[i]._tituloLivro + "</label>" +
                        "<img width='10px' height='10px' class='imgNoti' src='https://upload.wikimedia.org/wikipedia/commons/3/3d/Blue_dot.png'>" +
                        "</div>"
                }

                if (notificacoes[i]._tipo == "multa") { }


            }

        }

        divNotificacoes.innerHTML = strHTML

        let btnNotif = document.getElementsByClassName("notification")
        let btnImgNo = document.getElementsByClassName("imgNoti")

        for (let i = 0; i < btnNotif.length; i++) {

            btnNotif[i].addEventListener("click", function () {

                btnImgNo[i].src = ""

                let rowId = btnNotif[i].getAttribute("id")

                abrirPagLivro(rowId)

            })
        }


    }
}

function abrirPagLivro(idLivro) {

    localStorage.setItem("livroMais", idLivro)

    /*for (let i = 0; i < notificacoes.length; i++) {
        if (notificacoes[i]._id == idN) {
            notificacoes.splice(i, 1)
        }
    }*/

    window.open("html/requisitarLivro.html", "_self")

}

function descobrirRating(idLivro) {

    for (let i = 0; i < ratings.length; i++) {

        if (ratings[i]._idLivro == idLivro) {

            return (ratings[i]._classi)

        }

    }

}