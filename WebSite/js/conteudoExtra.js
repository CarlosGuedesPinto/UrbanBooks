let livroPorEditar = []
let livroEditado = []
let generos = []

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
        this.idBiblio = idBiblio

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

    if (localStorage.getItem("livroEditar")) {

        livroPorEditar = (JSON.parse(localStorage.getItem("livroEditar")))

    }
    if (localStorage.getItem("categorias")) {

        generos = (JSON.parse(localStorage.getItem("categorias")))

    }
    if (this.localStorage.getItem("livros")) {

        livros = (JSON.parse(localStorage.getItem("livros")))
    }

    let tituloLivro = document.getElementById("tituloLivro")
    let capaLivro = document.getElementById("capaLivro")
    let descLivro = document.getElementById("descLivro")
    let autoresLivro = document.getElementById("autoresLivro")
    let dataLivro = document.getElementById("dataLivro")
    let generoLivro = document.getElementById("generoLivro")
    let tagsLivro = document.getElementById("tagsLivro")
    let editoraLivro = document.getElementById("editoraLivro")
    let nPagLivro = document.getElementById("numPagLivro")
    let estadoBom = document.getElementById("estadoBom")
    let estadoAceitavel = document.getElementById("estadoAceitavel")
    let estadoFraco = document.getElementById("estadoFraco")
    let idBiblio = document.getElementById("idBiblio")

    let formEditLivro = document.getElementById("editLivro")

    adicionarCatNoSelect()

    preencherCampos()

    formEditLivro.addEventListener("submit", function (event) {

        event.preventDefault()
        

        for (let i = 0; i < livros.length; i++) {
            if (livros[i]._id == livroPorEditar._id) {
                livros.splice(i, 1)
            }
        }

        let estadoLivro

        if(estadoAceitavel.checked) {

            estadoLivro = 1
        }

        if(estadoBom.checked) {

            estadoLivro = 2
        }

        if(estadoFraco.checked) {

            estadoLivro = 0
        }

        let newLivro = new Livro(tituloLivro.value, capaLivro.value, descLivro.value, autoresLivro.value, dataLivro.value, generoLivro.value, tagsLivro.value, editoraLivro.value, nPagLivro.value, estadoLivro, idBiblio.value)
        livros.push(newLivro)

        /*Eliminar todo o conteudo do item Biblioteca*/
        localStorage.removeItem("livros")
        localStorage.removeItem("livroEditar")

        localStorage.setItem("livros", JSON.stringify(livros))

        let myWindow = window.close()

    })

    function adicionarCatNoSelect() {

        generoLivro.innerHTML = ""
        //opcaoCategoriasModal.innerHTML = ""
        /*Mter todos os generos e tags nas opceos*/
        for (let i = 0; i < generos.length; i++) {

            generoLivro.innerHTML += "<option value=" + generos[i]._categoriaNome + ">" + generos[i]._categoriaNome + "</option>"
            //opcaoCategoriasModal.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"

        }

    }

    function preencherCampos() {

        console.log(livroPorEditar)

        tituloLivro.value = livroPorEditar._titulo
        capaLivro.value = livroPorEditar._capaImagem
        descLivro.value = livroPorEditar._descricao
        autoresLivro.value = livroPorEditar._autores
        dataLivro.value = livroPorEditar._dataLancamento
        generoLivro.value = livroPorEditar._genero
        tagsLivro.value = livroPorEditar._tags
        editoraLivro.value = livroPorEditar._editora
        nPagLivro.value = livroPorEditar._nPaginas
        idBiblio.value = livroPorEditar._idBiblio

        if (livroPorEditar._estado == 2) {

            estadoBom.checked = true

        }
        if (livroPorEditar._estado == 1) {

            estadoAceitavel.checked = true

        }
        if (livroPorEditar._estado == 0) {

            estadoFraco.checked = true

        }
    }


}