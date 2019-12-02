let utilizadores = []
let userId = 0
let userAtual = ""
let livros = []
let tags = []
let notificacoes = []
let classificacoes = []
let ratings = []

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

class Rating {

    constructor(idLivro, classi) {

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

    constructor(titulo, capaImagem, descricao, autores, dataLancamento, genero, tags, editora, nPaginas, estado, idBiblio, disponibilidade) {
        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/

        this.id = Livro.getLastId() + 1


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
        this.idBiblio = idBiblio
        this.disponibilidade = disponibilidade

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

class Tag {

    constructor(tagNome) {

        this.tagNome = tagNome

    }

    get tagNome() {
        return this._tagNome
    }

    set tagNome(newTagNome) {
        this._tagNome = newTagNome
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

        if (localStorage.getItem("categorias")) {

            categorias = (JSON.parse(localStorage.getItem("categorias")))

        }

        if (localStorage.getItem("ratings")) {

            ratings = (JSON.parse(localStorage.getItem("ratings")))

        }

        if (localStorage.getItem("notificacoes")) {

            notificacoes = (JSON.parse(localStorage.getItem("notificacoes")))

        }

        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem("tags")))

        }

        if (localStorage.getItem("livros")) {

            livros = (JSON.parse(localStorage.getItem("livros")))

        }

        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem("tags")))

        }

    }

    /*VARIVAIES*/
    let formAddLivro = document.getElementById("addLivro")

    let divAddLivro = document.getElementById("formAddLivro")
    let divContainer2 = document.getElementsByClassName("container2")

    let butAdicionarImg = document.getElementById("imgCapa")
    let inputLink = document.getElementById("inputLink")
    let tituloLivro = document.getElementById("tituloLivro")
    let descLivro = document.getElementById("descLivro")
    let autoresLivro = document.getElementById("autoresLivro")
    let dataLivro = document.getElementById("dataLivro")
    let generoLivro = document.getElementById("generoLivro")
    let tagsLivro = document.getElementById("tagsLivro")
    let editoraLivro = document.getElementById("editoraLivro")
    let moradaBiblio = document.getElementById("moradasBiblio")
    let nPagLivro = document.getElementById("numPagLivro")
    let estadoBom = document.getElementById("estadoBom")
    let estadoAceitavel = document.getElementById("estadoAceitavel")
    let estadoFraco = document.getElementById("estadoFraco")

    let moradasBiblio = document.getElementById("moradasBiblio")

    adicionarTags()

    adicionarCatNoSelect()

    adicionarBiblioSelect()

    buttonsMenu()

    /*resize div
    function resizeDiv() {
        alert("OLA")
        var h = window.outerHeight;
        divContainer2.style.width += h
    }*/


    /*ADICIONAR LIVRO*/
    formAddLivro.addEventListener("submit", function (event) {



        let strError = ""
        let checkadas = 0
        let estadoLivro = ""

        if (estadoAceitavel.checked) {

            estadoLivro = estadoAceitavel.value

        }

        if (estadoBom.checked) {

            estadoLivro = estadoBom.value

        }


        if (estadoFraco.checked) {

            estadoLivro = estadoFraco.value

        }

        /*Adicionar Tags*/
        let tagsCheckLivro = tagsCheckadas()

        /*let tagsParaNotifi = separaTags()
        console.log(tagsParaNotifi)*/

        if (idBiblio() == "CHEIO") {


            alert("Biblioteca Cheia")


        }
        else {

            

            let newLivro = new Livro(tituloLivro.value, inputLink.value, descLivro.value, autoresLivro.value, dataLivro.value, generoLivro.value, tagsCheckLivro, editoraLivro.value, nPagLivro.value, estadoLivro, idBiblio(), "1")
            livros.push(newLivro)


            let newRating = new Rating(newLivro._id, "0")
            ratings.push(newRating)

            for (let i = 0; i < utilizadores.length; i++) {


                for (let j = 0; j < tagsCheckLivro.length; j++) {


                    if (utilizadores[i]._tags.includes(tagsCheckLivro[j])) {

                        let newNotificacao = new Notificacao(newLivro._id, tituloLivro.value, inputLink.value, utilizadores[i]._id, "livro")
                        notificacoes.push(newNotificacao)

                    }

                }

            }

            localStorage.removeItem("notificacoes")

            localStorage.setItem("notificacoes", JSON.stringify(notificacoes))

            localStorage.removeItem("ratings")

            localStorage.setItem("ratings", JSON.stringify(ratings))


            localStorage.removeItem("livros")

            localStorage.setItem("livros", JSON.stringify(livros))

            alert("Livro doado com sucesso")


        }


        event.preventDefault()




    })

    function idBiblio() {

        let idBiblio
        let livrosCont = 0

        for (let i = 0; i < bibliotecas.length; i++) {

            if (moradaBiblio.value == bibliotecas[i]._morada) {

                for (let k = 0; k < livros.length; k++) {

                    if (livros[k]._idBiblio == bibliotecas[i]._id) {

                        livrosCont++

                    }

                }


                if ((livrosCont + 1) == bibliotecas[i]._capacidade) {

                    idBiblio = "CHEIO"
                }
                else {

                    idBiblio = bibliotecas[i]._id
                }


            }

        }


        return idBiblio

    }

    function tagsCheckadas(tagId) {

        /*
        let tags1 = tagsLivro.value
        let length = tags1.length

        let strongNotifi = []

        for (let i = 1; i < length; i++) {

            if (tags1.charAt(i) == "#") {

                let novaTag1 = tags1.slice(0, i)

                let novaTag = new Tag(novaTag1)
                tags.push(novaTag)

                strongNotifi.push(novaTag)

                localStorage.removeItem("tags")

                localStorage.setItem("tags", JSON.stringify(tags))

                tags1 = tags1.substr(i, tags1.length)

            }

        }

        let novaTag = new Tag(tags1)
        tags.push(novaTag)

        strongNotifi.push(novaTag)

        localStorage.removeItem("tags")

        localStorage.setItem("tags", JSON.stringify(tags))

        alert(strongNotifi)

        return (strongNotifi)*/
        let checkTag = document.getElementsByClassName("tag")

        let tagsSelecionadas = []

        for (let i = 0; i < checkTag.length; i++) {

            let id = checkTag[i].getAttribute("id")

            if (document.getElementById(id).checked) {
                tagsSelecionadas.push(id)
            }


        }

        return (tagsSelecionadas)

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
        let formLogin = document.getElementById("formLogin")
        let formRegisto = document.getElementById("formRegisto")


        btnLogout.style.display = "block";


        btnLogout.addEventListener("click", function () {
            userId = 0
            localStorage.setItem("userLogged", JSON.stringify(userId))
        })



    }

    function adicionarCatNoSelect() {

        generoLivro.innerHTML = ""
        //opcaoCategoriasModal.innerHTML = ""
        /*Mter todos os generos e tags nas opceos*/
        for (let i = 0; i < categorias.length; i++) {

            generoLivro.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"
            //opcaoCategoriasModal.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"

        }

    }

    function adicionarTags() {

        tagsLivro.innerHTML = "<label class='correct'>Tags</label>"

        let strHTML = ""

        for (let i = 0; i < tags.length; i++) {

            strHTML += "<input id='" + tags[i]._tagNome + "' class='tag' type='checkbox'>" + tags[i]._tagNome + "</input>"

        }

        tagsLivro.innerHTML += strHTML

        /*let eventListener = document.getElementsByClassName("tag")

        for (let i=0;i<eventListener.length;i++) {

            eventListener[i].addEventListener("click", function() {

                let id = eventListener[i].getAttribute("id")

                tagsCheckadas(id)

            })

        }*/

        event.preventDefault()

    }

    function adicionarBiblioSelect() {

        moradasBiblio.innerHTML = ""

        for (let i = 0; i < bibliotecas.length; i++) {

            moradasBiblio.innerHTML += "<option value=" + bibliotecas[i]._morada + ">" + bibliotecas[i]._morada + "</option>"

        }

    }
}
