let bibliotecas = []
let categorias = []
let tags = []
let utilizadores = []
let livros = []
let livroEditar = []
let requisicoes = []
let markers = []
let tipoPagExtra
let markers1 = []
let latInserir
let lngInserir

let markerAntigo

class Biblioteca {

    constructor(freguesia, morada, gps, capacidade) {

        this.id = Biblioteca.getLastId() + 1
        this.freguesia = freguesia
        this.morada = morada
        this.gps = gps
        this.capacidade = capacidade

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get freguesia() {
        return this._freguesia
    }

    set freguesia(newFreguesia) {
        this._freguesia = newFreguesia
    }

    get morada() {
        return this._morada
    }

    set morada(newMorada) {
        this._morada = newMorada
    }

    get gps() {
        return this._gps
    }

    set gps(newGps) {
        this._gps = newGps
    }

    get capacidade() {
        return this._capacidade
    }

    set capacidade(newCapacidade) {
        this._capacidade = newCapacidade
    }

    static getLastId() {
        let lastId = 0
        if (bibliotecas.length != 0) {
            lastId = bibliotecas[bibliotecas.length - 1]._id
        }
        return lastId
    }

}

class Categoria {

    constructor(categoriaNome) {

        this.id = Categoria.getLastId() + 1
        this.categoriaNome = categoriaNome

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get categoriaNome() {
        return this._categoriaNome
    }

    set categoriaNome(newCategoriaNome) {
        this._categoriaNome = newCategoriaNome
    }

    static getLastId() {
        let lastId = 0
        if (categorias.length != 0) {
            lastId = categorias[categorias.length - 1]._id
        }
        return lastId
    }

}

class Tag {

    constructor(tagNome) {

        this.id = Tag.getLastId() + 1
        this.tagNome = tagNome

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get tagNome() {
        return this._tagNome
    }

    set tagNome(newTagNome) {
        this._tagNome = newTagNome
    }

    static getLastId() {
        let lastId = 0
        if (tags.length != 0) {
            lastId = tags[tags.length - 1]._id
        }
        return lastId
    }

}

class Utilizador {

    constructor(nome, tipo, email, pass, multa, tags, foto, idBiblio, id) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        if (id == null) {
            
            this.id = Utilizador.getLastId() + 1
        }
        else {
            this.id = id
        }

        if (idBiblio == null) {

            this.idBiblio = null
        }
        else {
            this.idBiblio = idBiblio
        }

        this.nome = nome
        this.tipo = tipo
        this.email = email
        this.pass = pass
        this.multa = multa
        this.foto = foto
        this.tags = tags

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get idBiblio() {
        return this._idBiblio
    }

    set idBiblio(newIdBiblio) {
        this._idBiblio = newIdBiblio
    }

    get tags() {
        return this._tags
    }

    set tags(newTags) {
        this._tags = newTags
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

    constructor(titulo, capaImagem, descricao, autores, dataLancamento, genero, tags, editora, nPaginas, estado, idBiblio, disponibilidade, id) {
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
        this._disponibilidade = "1"

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
        if (livros != null) {
            if (livros.length != 0) {
                lastId = livros[livros.length - 1]._id
            }
        }
        else {
            lastId = 1
        }


        return lastId

    }

}
/*
class Requisicao {

    constructor(diasRequi, valorMulta, limiMulta) {

        if (id == null) {
            this.id = Requisicao.getLastId() + 1
        }
        else {
            this.id = id
        }

        this.diasRequi = diasRequi
        this.valorMulta = valorMulta
        this.limiMulta = limiMulta
        this.tempoSemPagar = Requisicao.tempoSemPagar()

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    set id(newId) {
        this._id = newId
    }

    get diasRequi() {
        return this._diasRequi
    }

    set diasRequi(newDiasRequi) {
        this._diasRequi = newDiasRequi
    }

    get valorMulta() {
        return this._valorMulta
    }

    set valorMulta(newValorMulta) {
        this._valorMulta = newValorMulta
    }

    get limiMulta() {
        return this._limiMulta
    }

    set limiMulta(newLimiMulta) {
        this._limiMulta = newLimiMulta
    }

    static getLastId() {
        let lastId = 0
        if (categorias.length != 0) {
            lastId = categorias[categorias.length - 1]._id
        }
        return lastId
    }

    static tempoSemPagar() {

        Ver melhor isto
        let millisec = Math.abs(dataAtual() - limiMulta)

        var seconds = (millisec / 1000).toFixed(1);

        var minutes = (millisec / (1000 * 60)).toFixed(1);

        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

        if (seconds < 60) {
            return seconds + " Sec";
        } else if (minutes < 60) {
            return minutes + " Min";
        } else if (hours < 24) {
            return hours + " Hrs";
        } else {
            return days + " Days"
        }

    }

}*/

class Marker {

    constructor(adress, idBiblio, lat, lng) {

        this.id = Marker.getLastId() + 1
        this.adress = adress
        this.idBiblio = idBiblio
        this.lat = lat
        this.lng = lng

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get adress() {
        return this._adress
    }

    set adress(newAdress) {
        this._adress = newAdress
    }

    get idBiblio() {
        return this._idBiblio
    }

    set idBiblio(newIdBiblio) {
        this._idBiblio = newIdBiblio
    }

    get lat() {
        return this._lat
    }

    set lat(newLat) {
        this._lat = newLat
    }

    get lng() {
        return this._lng
    }

    set lng(newLng) {
        this._lng = newLng
    }

    static getLastId() {
        let lastId = 0
        if (markers.length != 0) {
            lastId = markers[markers.length - 1]._id
        }
        return lastId
    }

}


window.onload = function () {

    /*Navegador Lateral*/
    document.getElementById("fecharNav").addEventListener("click", function () {
        closeNave()
    })

    document.getElementById("abrirNav").addEventListener("click", function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("container").style.marginLeft = "250px";
    })

    function closeNave() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("container").style.marginLeft = "0";
    }


    /*Ir buscar todos os array ao LocalStorage*/
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


        if (localStorage.getItem("requisicoes")) {

            requisicoes = (JSON.parse(localStorage.getItem("requisicoes")))

        }

        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem("tags")))

        }

        if (localStorage.getItem("markers")) {

            markers = (JSON.parse(localStorage.getItem("markers")))

        }

        if (localStorage.getItem("livros")) {

            livros = (JSON.parse(localStorage.getItem("livros")))

        }

    }

    //##################################################VARIAVEIS""#######################################"

    /*forms*/
    let formAddBibliot = document.getElementById("addBiblio")
    let formAddCat = document.getElementById("addCat")
    let formAddTag = document.getElementById("addTag")
    let formAddUti = document.getElementById("addUtilizador")
    let formEditUti = document.getElementById("editUtilizador")
    let formAddLivro = document.getElementById("addLivro")
    let formAddRequisicao = document.getElementById("addRequisicao")

    /*Butoes*/
    let butBiblio = document.getElementById("butBiblio")
    //let butRegressar = document.getElementById("butRegressar")
    let butCat = document.getElementById("butCategorias")
    let butTag = document.getElementById("butTags")
    let butMenuUti = document.getElementById("butUtili")
    let butAddUti = document.getElementById("addUti")
    let butEditUti = document.getElementById("editUti")
    let butRemUti = document.getElementById("remUti")
    let butMarkers = document.getElementById("butMarkers")
    let idBiblioteca = document.getElementById("idBiblioteca")
    //let butRegressarUti = document.getElementById("regressarMenuUti")
    //let butRegressarAddUti = document.getElementById("regressarAddUti")
    //let butRegressarEditUti = document.getElementById("regressarEditUti")
    //let butRegressarRemUti = document.getElementById("regressarRemUti")
    let butGuardarEdicao = document.getElementById("guardarEditUti")
    let butLivros = document.getElementById("butLivros")
    let butRequisicao = document.getElementById("butRequisicoes")

    /*Butoes Opcoes(categorias e tags)
    let opcaoCategorias = document.getElementById("generoLivro")
    let opcaoCategoriasModal = document.getElementById("generoLivroModal")
*/

    /*Campos preenchimento*/
    let novaFreguesiaBiblio = document.getElementById("freguesiaBiblioteca")
    let novaMoradaBiblio = document.getElementById("moradaBiblioteca")
    let adressBiblio = document.getElementById("coordBiblioteca")
    let novaCapacidadeBiblio = document.getElementById("capacidadeBiblioteca")

    let novaCategoria = document.getElementById("novaCategoria")

    let novaTag = document.getElementById("novaTag")

    let novoUtiNome = document.getElementById("utiNome")
    let novoUtiEmail = document.getElementById("utiEmail")
    let novoUtiPass = document.getElementById("utiPassword")
    let novoUtiMulta = document.getElementById("utiMulta")
    let novoUtiFoto = document.getElementById("utiFoto")
    let checkAdmin = document.getElementById("utiTipoAdmin")
    let checkUser = document.getElementById("utiTipoUser")
    let checkOper = document.getElementById("utiTipoOper")

    let utiTags = document.getElementById("utiTags")

    let novoUtiNome1 = document.getElementById("utiNome1")
    let novoUtiEmail1 = document.getElementById("utiEmail1")
    let novoUtiPass1 = document.getElementById("utiPassword1")
    let novoUtiMulta1 = document.getElementById("utiMulta1")
    let novoUtiFoto1 = document.getElementById("utiFoto1")
    let checkAdmin1 = document.getElementById("utiTipoAdmin1")
    let checkUser1 = document.getElementById("utiTipoUser1")
    let checkOper1 = document.getElementById("utiTipoOper1")
    let novoIdBiblio1 = document.getElementById("idBiblio1")

    let novoUtiTags1 = document.getElementById("utiTags1")

    let tituloLivro = document.getElementById("tituloLivro")
    let capaLivro = document.getElementById("capaLivro")
    let descLivro = document.getElementById("descLivro")
    let autoresLivro = document.getElementById("autoresLivro")
    let dataLivro = document.getElementById("dataLivro")
    let generoLivro = document.getElementById("generoLivro")
    let tagsLivro = document.getElementById("tagsLivro")
    let editoraLivro = document.getElementById("editoraLivro")
    let idBiblio = document.getElementById("idBiblio")
    let nPagLivro = document.getElementById("numPagLivro")
    let estadoBom = document.getElementById("estadoBom")
    let estadoAceitavel = document.getElementById("estadoAceitavel")
    let estadoFraco = document.getElementById("estadoFraco")

    let diasRequi = document.getElementById("diasRequi")
    let valorMulta = document.getElementById("valorMulta")
    let limiteMulta = document.getElementById("limiteMulta")
    let tempoPas = document.getElementById("tempoPas")

    /*Divs e tabelas*/
    let divInserirBiblio = document.getElementById("bibliotecas")
    let divTblBiblio = document.getElementById("tblBiblio")
    let tblBiblioteca = document.getElementById("tabelaBiblio")

    let divMarkers = document.getElementById("markers")
    let divMapaMarkers = document.getElementById("mapMarkers")

    let divInserirCat = document.getElementById("categorias")
    let divTblCat = document.getElementById("tblCat")
    let tblCategorias = document.getElementById("tabelaCat")


    let divInserirTag = document.getElementById("tags")
    let divTblTag = document.getElementById("tblTag")
    let tblTags = document.getElementById("tabelaTag")

    let divUti = document.getElementById("utilizadores")
    //let divMenuUti = document.getElementById("menuUtilizadores")
    let divTblAddUti = document.getElementById("tblAddUti")
    let divTblRemUti = document.getElementById("tblRemUti")
    let divTblEditUti = document.getElementById("tblEditUti")
    let tblAddUti = document.getElementById("tabelaAddUti")
    let tblRemUti = document.getElementById("tabelaRemUti")
    let tblEditUti = document.getElementById("tabelaEditUti")
    let divFormAddUti = document.getElementById("formAddUti")
    let divFormEditUti = document.getElementById("formEditUti")
    let divRemUti = document.getElementById("mostrarRegButRem")

    let idBiblioOper = document.getElementById("operBiblio")
    let labelIdBiblio = document.getElementById("idBiblioLabel")

    let divInserirLivro = document.getElementById("livros")
    let tblLivros = document.getElementById("tabelaLivro")
    let divTblLivro = document.getElementById("tblLivro")

    let divRequisicoes = document.getElementById("requisicoes")
    let tblRequisicoes = document.getElementById("tabelaRequisicao")
    let divTblRequisicao = document.getElementById("tblRequisicao")

    let tableMarkers = document.getElementById("tabelaMarkers")

    /*PAGINA EXTRA*/
    let divContainer = document.getElementById("containerExtra")

    let map
    let myMap = document.getElementById("map")
    let myMapMarkers = document.getElementById("mapMarkers")
    let butRemMark = document.getElementById("butRemMark")

    /*Se houver alguma categoria, adicionar ao select*/
    adicionarCatNoSelect()

    /*Iniciar Mapa
    mostrarMapa()*/

    buscarLocal()


    /*Ir buscar a data atual(preciso para ver o tempo de multa*/
    function dataAtual() {

        let hoje = new Date()
        var dd = hoje.getDate()
        var mm = hoje.getMonth() + 1 //January is 0!
        var yyyy = hoje.getFullYear()

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        hoje = dd + '/' + mm + '/' + yyyy

        return (hoje)

    }

    /*#########################################BIBLIOTECAS########################################*/

    /*Adicionar Nova Bilioteca*/
    formAddBibliot.addEventListener("submit", function (event) {

        let strError = ""

        for (var i = 0; i < bibliotecas.length; i++) {
            if (bibliotecas[i].morada == novaMoradaBiblio.value) {
                strError += "Biblioteca com morada já existente"
            }
        }

        if (strError == "") {

            event.preventDefault()

            let newBiblio = new Biblioteca(novaFreguesiaBiblio.value, novaMoradaBiblio.value, adressBiblio.value, novaCapacidadeBiblio.value)
            bibliotecas.push(newBiblio)

            let newMarker = new Marker(adress, (bibliotecas.length), latInserir, lngInserir)
            markers.push(newMarker)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("bibliotecas")
            localStorage.removeItem("markerAtual")

            localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas))

            localStorage.removeItem("markers")

            localStorage.setItem("markers", JSON.stringify(markers))

            renderTableBiblio()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableBiblio()

            event.preventDefault()
        }

    })

    /*Renderizar Tabela*/
    function renderTableBiblio() {

        tblBiblioteca.innerHTML = ""

        tblBiblioteca.innerHTML = "<table id='tabelaBiblio' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Freguesia</th>"
            + "<th>Morada</th>"
            + "<th>GPS</th>"
            + "<th>Capacidade</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < bibliotecas.length; i++) {

            strHTML += "<tr>" +
                "<td>" + bibliotecas[i]._id + "</td>" +
                "<td>" + bibliotecas[i]._freguesia + "</td>" +
                "<td>" + bibliotecas[i]._morada + "</td>" +
                "<td>" + bibliotecas[i]._gps + "</td>" +
                "<td>" + bibliotecas[i]._capacidade + "</td>" +
                "<td><button type='button' class='remove' id=" + bibliotecas[i]._id + ">-</button>"
            "</tr>"

        }

        tblBiblioteca.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowBiblioById(rowId)

                /*Eliminar todo o conteudo do item Biblioteca*/
                localStorage.removeItem("bibliotecas")

                localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas))

                localStorage.removeItem("markers")

                localStorage.setItem("markers", JSON.stringify(markers))

                renderTableBiblio()
            })
        }
    }

    function removeRowBiblioById(id) {

        let idB = id

        removeMarkerById(idB)

        for (let i = 0; i < bibliotecas.length; i++) {
            if (bibliotecas[i]._id == id) {
                bibliotecas.splice(i, 1)
            }
        }


    }

    function removeMarkerById(id) {

        for (let i = 0; i < markers.length; i++) {
            if (markers[i]._idBiblio == id) {

                markers.splice(i, 1)

            }
        }

    }

    /*Abrir parametros biblioteca*/
    butBiblio.addEventListener("click", function () {


        divInserirBiblio.style.display = "block"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "none"
        divMarkers.style.display = "none"

        closeNave()

        renderTableBiblio()

    })
    /*##########################################REQUISICOES########################################*/

    butRequisicao.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "block"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "none"
        divMarkers.style.display = "none"

        renderTableRequi()

        closeNave()

    })

    function renderTableRequi() {

        

        tblRequisicoes.innerHTML = ""

        tblRequisicoes.innerHTML = "<table id='requisicoesTag' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Id User</th>"
            + "<th>Id Livro</th>"
            + "<th>Data Atual</th>"
            + "<th>Data Limite</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < requisicoes.length; i++) {

            strHTML += "<tr>" +
                "<td>" + requisicoes[i]._id + "</td>" +
                "<td>" + requisicoes[i]._idUser + "</td>" +
                "<td>" + requisicoes[i]._idLivro + "</td>" +
                "<td>" + requisicoes[i]._dataAtual + "</td>" +
                "<td>" + requisicoes[i]._dataLimite + "</td>" +
                "<td><button type='button' class='remove' id=" + requisicoes[i]._id + ">-</button>"
            "</tr>"

        }

        tblRequisicoes.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowRequiById(rowId)
                renderTableRequi()
            })
        }
    }

    function removeRowRequiById(id) {

        for (let i = 0; i < requisicoes.length; i++) {
            if (requisicoes[i]._id == id) {
                requisicoes.splice(i, 1)
            }
        }
        /*Eliminar todo o conteudo do item Biblioteca*/
        localStorage.removeItem("requisicoes")

        localStorage.setItem("requisicoes", JSON.stringify(requisicoes))
    }



    /*##########################################CATEGORIAS########################################*/

    butCat.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "block"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "none"
        divMarkers.style.display = "none"

        renderTableCat()

        closeNave()

    })

    /*Adicionar Categoria*/
    formAddCat.addEventListener("submit", function () {

        let strError = ""

        /*Verificar se já existe essa Categoria*/
        for (var i = 0; i < categorias.length; i++) {
            if (categorias[i].categoriaNome == novaCategoria.value) {
                strError += "Categoria já existente"
            }
        }

        if (strError == "") {

            let newCat = new Categoria(novaCategoria.value)
            categorias.push(newCat)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("categorias")

            localStorage.setItem("categorias", JSON.stringify(categorias))

            renderTableCat()

            /*Adiciona no select(opcoes)*/
            adicionarCatNoSelect()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableCat()

            event.preventDefault()
        }


    })

    function adicionarCatNoSelect() {

        generoLivro.innerHTML = ""
        //opcaoCategoriasModal.innerHTML = ""
        /*Mter todos os generos e tags nas opceos*/
        for (let i = 0; i < categorias.length; i++) {

            generoLivro.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"
            //opcaoCategoriasModal.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"

        }

    }

    /*Renderizar Tabela*/
    function renderTableCat() {

        tblCategorias.innerHTML = ""

        tblCategorias.innerHTML = "<table id='tabelaCat' style='width: 100 % '>"
            + "<tr>"
            + "<th>Categorias</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < categorias.length; i++) {

            strHTML += "<tr>" +
                "<td>" + categorias[i]._categoriaNome + "</td>" +
                "<td><button type='button' class='remove' id=" + categorias[i]._id + ">-</button>"
            "</tr>"

        }

        tblCategorias.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")

                removeRowCatById(rowId)

                /*Eliminar todo o conteudo do item Biblioteca*/
                localStorage.removeItem("categorias")

                localStorage.setItem("categorias", JSON.stringify(categorias))

                renderTableCat()
            })
        }
    }

    function removeRowCatById(id) {

        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i]._id == id) {
                categorias.splice(i, 1)
            }
        }
    }

    /*##########################################TAGS########################################*/

    butTag.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "block"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "none"
        divMarkers.style.display = "none"

        renderTableTag()

        closeNave()

    })

    /*Adicionar Categoria*/
    formAddTag.addEventListener("submit", function () {

        let strError = ""

        /*Verificar se já existe essa Categoria*/
        for (var i = 0; i < tags.length; i++) {
            if (tags[i]._tagNome == novaTag.value) {
                strError += "Tag já existente"
            }
        }

        if (strError == "") {

            let newTag = new Tag(novaTag.value)
            tags.push(newTag)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("tags")

            localStorage.setItem("tags", JSON.stringify(tags))


            renderTableTag()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableTag()

            event.preventDefault()
        }


    })

    /*Renderizar Tabela*/
    function renderTableTag() {

        tblTags.innerHTML = ""

        tblTags.innerHTML = "<table id='tabelaTag' style='width: 100 % '>"
            + "<tr>"
            + "<th>Tags</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < tags.length; i++) {

            strHTML += "<tr>" +
                "<td>" + tags[i]._tagNome + "</td>" +
                "<td><button type='button' class='remove' id=" + tags[i]._id + ">-</button>"
            "</tr>"

        }

        tblTags.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowTagById(rowId)
                renderTableTag()
            })
        }
    }

    function removeRowTagById(id) {

        for (let i = 0; i < tags.length; i++) {
            if (tags[i]._id == id) {
                tags.splice(i, 1)
            }
        }
        /*Eliminar todo o conteudo do item Biblioteca*/
        localStorage.removeItem("tags")

        localStorage.setItem("tags", JSON.stringify(tags))
    }

    /*#########################################UTILIZADORES########################################*/


    /*Butao Adicionar Utilizadores*/
    butAddUti.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "block"
        divRemUti.style.display = "none"
        divMarkers.style.display = "none"

        renderTableAddUti()

        closeNave()

    })

    checkOper.addEventListener("click", function () {

        idBiblioOper.style.display = "block"
        labelIdBiblio.style.display = "block"

    })



    /*Renderizar Tabela, sem a possibilidade de Remover utilizadores*/
    function renderTableAddUti() {

        tblAddUti.innerHTML = ""

        tblAddUti.innerHTML = "<table id='tabelaAddUti' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Nome</th>"
            + "<th>Tipo</th>"
            + "<th>Email</th>"
            + "<th>Password</th>"
            + "<th>Multa</th>"
            + "<th>Tags</th>"
            + "<th>Foto</th>"
            + "<th>IdBiblio(Oper)</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td>" + utilizadores[i]._multa + "</td>" +
                "<td>" + utilizadores[i]._tags + "</td>" +
                "<td>" + utilizadores[i]._foto + "</td>" +
                "<td>" + utilizadores[i]._idBiblio + "</td>" +
                "</tr>"

        }

        tblAddUti.innerHTML += strHTML

    }

    /*Adicionar Utilizador*/
    formAddUti.addEventListener("submit", function () {

        let strError = ""
        let checked = 0
        let tipoUti = ""

        /*Verificar se já existe essa Email*/
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == novoUtiEmail.value) {
                strError += "Email já existente"
            }
        }

        /*Verificar se estao checkadas as combo box, ficando com o valor do tipo de utilisador*/
        if (checkAdmin.checked) {
            checked++
            tipoUti = checkAdmin.value
        }
        if (checkUser.checked) {
            checked++
            tipoUti = checkUser.value
        }
        if (checkOper.checked) {
            checked++
            tipoUti = checkOper.value
        }

        if (checked != 1) {
            strError += "\n Tem de escolher um e só um tipo de utilizador"
        }

        if ((strError == "") && (checkOper.checked)) {

            let newUtilizador = new Utilizador(novoUtiNome.value, tipoUti, novoUtiEmail.value, novoUtiPass.value, novoUtiMulta.value, utiTags.value, novoUtiFoto.value, idBiblioOper.value)
            utilizadores.push(newUtilizador)

            localStorage.removeItem("utilizadores")

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

            renderTableAddUti()

            event.preventDefault()

        }

        if ((strError == "") && (!(checkOper.checked))) {

            let newUtilizador = new Utilizador(novoUtiNome.value, tipoUti, novoUtiEmail.value, novoUtiPass.value, novoUtiMulta.value, utiTags.value, novoUtiFoto.value)
            utilizadores.push(newUtilizador)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("utilizadores")

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

            renderTableAddUti()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableAddUti()

            event.preventDefault()

        }


    })

    /*Butao Editar Utilizadores*/
    butEditUti.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "block"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "none"
        divMarkers.style.display = "none"

        renderTableEditUti()

        closeNave()

    })

    function renderTableEditUti() {

        tblEditUti.innerHTML = ""

        tblEditUti.innerHTML = "<table id='tabelaEditUti' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Nome</th>"
            + "<th>Tipo</th>"
            + "<th>Email</th>"
            + "<th>Password</th>"
            + "<th>Multa</th>"
            + "<th>Tags</th>"
            + "<th>Foto</th>"
            + "<th>Id Biblio</th>"
            + "<th>Editar</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td>" + utilizadores[i]._multa + "</td>" +
                "<td>" + utilizadores[i]._tags + "</td>" +
                "<td>" + utilizadores[i]._foto + "</td>" +
                "<td>" + utilizadores[i]._idBiblio + "</td>" +
                "<td><button type='button' class='edit' id=" + utilizadores[i]._id + ">+</button>"
            "</tr>"

        }

        tblEditUti.innerHTML += strHTML

        /*Botoes Editar*/
        let btnEdit = document.getElementsByClassName("edit")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnEdit.length; i++) {
            btnEdit[i].addEventListener("click", function () {

                let rowId = btnEdit[i].getAttribute("id")
                /*Funcao para editar o utilizador*/
                editRowUtiById(rowId)
                /*funcao para remover o utilizador, onde depois é adicionado (com o mesmo id)*/
                removeRowUtiById(rowId)

                renderTableEditUti()

            })
        }

    }

    let novoId = 0
    let tipoUti1 = ""

    function editRowUtiById(id) {

        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._id == id) {

                /*guardar o id para o utilizador ficar com o msm id*/
                novoId = utilizadores[i]._id

                novoUtiNome1.value = utilizadores[i]._nome
                novoUtiEmail1.value = utilizadores[i]._email
                novoUtiPass1.value = utilizadores[i]._pass
                novoUtiMulta1.value = utilizadores[i]._multa
                novoUtiTags1.value = utilizadores[i]._tags
                novoUtiFoto1.value = utilizadores[i]._foto
                novoIdBiblio1.value = utilizadores[i]._idBiblio

                if (utilizadores[i]._tipo == "0") {
                    checkAdmin1.checked = true
                }
                if (utilizadores[i]._tipo == "1") {
                    checkUser1.checked = true
                }
                if (utilizadores[i]._tipo == "2") {
                    checkOper1.checked = true
                }


                event.preventDefault()

            }
        }
    }

    /*adicionar o utilizador editado ao array e à tabela*/
    function addEditedRow() {

        let checked = 0
        let strError = ""
        let tipoUti1 = ""

        if (checkAdmin1.checked) {
            checked++
            tipoUti1 = checkAdmin.value

        }
        if (checkUser1.checked) {
            checked++
            tipoUti1 = checkUser.value
        }
        if (checkOper1.checked) {
            checked++
            tipoUti1 = checkOper.value
        }

        if (checked != 1) {
            strError += "\n Tem de escolher um e só um tipo de utilizador"
        }

        if ((strError == "") && (checkOper.checked)) {

            let editedUtilizador = new Utilizador(novoUtiNome1.value, tipoUti1, novoUtiEmail1.value, novoUtiPass1.value, novoUtiMulta1.value, novoUtiTags1.value, novoUtiFoto1.value, novoIdBiblio1.value, novoId)
            utilizadores.push(editedUtilizador)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("utilizadores")

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

            novoUtiNome1.value = ""
            novoUtiEmail1.value = ""
            novoUtiPass1.value = ""
            novoUtiMulta1.value = ""
            novoUtiFoto1.value = ""
            novoUtiTags1.value = ""
            novoIdBiblio1.value = ""
            checkAdmin1.checked = false
            checkOper1.checked = false
            checkUser1.checked = false
        }
        else {

            let editedUtilizador = new Utilizador(novoUtiNome1.value, tipoUti1, novoUtiEmail1.value, novoUtiPass1.value, novoUtiMulta1.value, novoUtiTags1.value, novoUtiFoto1.value, null, novoId)
            utilizadores.push(editedUtilizador)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("utilizadores")

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

            novoUtiNome1.value = ""
            novoUtiEmail1.value = ""
            novoUtiPass1.value = ""
            novoUtiMulta1.value = ""
            novoUtiFoto1.value = ""
            novoIdBiblio1.value = ""
            checkAdmin1.checked = false
            checkOper1.checked = false
            checkUser1.checked = false

        }


    }

    function removeRowUtiById(id) {

        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._id == id) {
                utilizadores.splice(i, 1)
            }
        }

        /*Eliminar todo o conteudo do item Biblioteca*/
        localStorage.removeItem("utilizadores")

        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

    }

    /*butao para guradar a edicao, adicionando o utilizador ao arrya*/
    butGuardarEdicao.addEventListener("click", function () {

        addEditedRow()
        renderTableEditUti()

    })


    /*Butao Remover Utilizadores*/
    butRemUti.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "block"
        divMarkers.style.display = "none"

        renderTableRemUti()

        closeNave()

        event.preventDefault()

    })

    function renderTableRemUti() {

        tblRemUti.innerHTML = ""

        tblRemUti.innerHTML = "<table id='tabelaRemUti' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Nome</th>"
            + "<th>Tipo</th>"
            + "<th>Email</th>"
            + "<th>Password</th>"
            + "<th>Multa</th>"
            + "<th>Foto</th>"
            + "<th>Editar</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td>" + utilizadores[i]._multa + "</td>" +
                "<td>" + utilizadores[i]._foto + "</td>" +
                "<td><button type='button' class='remove' id=" + utilizadores[i]._id + ">-</button></td>"
            "</tr>"

        }

        tblRemUti.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {

                let rowId = btnRemove[i].getAttribute("id")
                removeRowUtiById(rowId)

                renderTableRemUti()
            })
        }



    }


    /*#########################################LIVROS########################################*/

    /*Adicionar Nova lIVRO*/
    formAddLivro.addEventListener("submit", function (event) {

        let strError = ""
        let checkadas = 0
        let estadoLivro = ""
        
        if (estadoAceitavel.checked) {

            checkadas++
            estadoLivro = estadoAceitavel.value

        }

        if (estadoBom.checked) {

            checkadas++
            estadoLivro = estadoBom.value

        }


        if (estadoFraco.checked) {

            checkadas++
            estadoLivro = estadoFraco.value

        }

        if (checkadas > 1) {

            strError += "O livro só pode ter um estado atual"

        }

        if (checkadas == 0) {

            strError += "O livro tem que ter um estado atual"

        }

        let encont = 0

        for (i = 0; i < bibliotecas.length; i++) {

            if (idBiblio.value == bibliotecas[i]._id) {

                encont = 1

            }

        }

        if (encont == 0) {

            strError += "Biblioteca não encontrada"

        }

        if (strError == "") {

            let newLivro = new Livro(tituloLivro.value, capaLivro.value, descLivro.value, autoresLivro.value, dataLivro.value, generoLivro.value, tagsLivro.value, editoraLivro.value, nPagLivro.value, estadoLivro, idBiblio.value)
           
            livros.push(newLivro)
            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("livros")

            localStorage.setItem("livros", JSON.stringify(livros))

            renderTableLivros()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableLivros()

            event.preventDefault()
        }

    })

    /*Renderizar Tabela*/
    function renderTableLivros() {

        livros = (JSON.parse(localStorage.getItem("livros")))

        tblLivros.innerHTML = ""

        tblLivros.innerHTML = "<table id='tabelaLivro' style='width: 100 % '>"
            + "<tr>"
            + "<th>Codigo</th>"
            + "<th>Titulo</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        if (livros != null) {
          
            for (var i = 0; i < livros.length; i++) {
                strHTML += "<tr>" +
                    "<td>" + livros[i]._id + "</td>" +
                    "<td>" + livros[i]._titulo + "</td>" +
                    "<td><button type='button' class='remove' id=" + livros[i]._id + ">-</button>" +
                    "<td><button type='button' class='edit' id=" + livros[i]._id + ">+</button>"
                "</tr>"
            }
        }

        tblLivros.innerHTML += strHTML

        let btnEdit = document.getElementsByClassName("edit")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnEdit.length; i++) {
            btnEdit[i].addEventListener("click", function () {

                let rowId = btnEdit[i].getAttribute("id")

                verLivroMelhor(rowId)

                //renderTableLivros()

            })
        }

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowLivroById(rowId)

                /*Eliminar todo o conteudo do item Biblioteca*/
                localStorage.removeItem("livros")

                localStorage.setItem("livros", JSON.stringify(livros))

                renderTableLivros()
            })
        }
    }

    function removeRowLivroById(id) {

        for (let i = 0; i < livros.length; i++) {
            if (livros[i]._id == id) {
                livros.splice(i, 1)
            }
        }
    }

    butLivros.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "block"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "none"
        divMarkers.style.display = "none"

        closeNave()

        renderTableLivros()

    })

    function verLivroMelhor(id) {

        let myWindow

        for (let i = 0; i < livros.length; i++) {

            if (livros[i]._id == id) {

                livroEditar = livros[i]

                localStorage.setItem("livroEditar", JSON.stringify(livroEditar))

            }

        }

        myWindow = window.open("conteudoExtra.html", "", "width=800,height=800")

        location.reload()

        /*Ver melhor forma*/

    }

    /*#########################################MAPA E MARKERS########################################*/

    let showPosition
    let adress

    function mostrarMapa(lat, long) {

        let positionMarker

        let mapProp = {

            center: new google.maps.LatLng(lat, long),
            zoom: 15

        }

        map = new google.maps.Map(myMap, mapProp)
        map1 = new google.maps.Map(myMapMarkers, mapProp)

        map.addListener('click', function (event) {

            if (markers1.length > 0) {

                alert("Só pode adicionar um marcador")

            }
            else {

                let lat = event.latLng.lat()
                let long = event.latLng.lng()

                setMarker(lat, long)

            }

        })

        function setMarker(lat, lng) {

            marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.BOUNCE,
                position: { lat, lng }
            })

            markers1.push(marker)

            localStorage.setItem("markerAtual", marker)

            /*COnverter lat para adress*/
            var geocoder = new google.maps.Geocoder();
            var location = new google.maps.LatLng(lat, lng);

            geocoder.geocode({ 'latLng': location }, function (results, status) {

                if (status == google.maps.GeocoderStatus.OK) {
                    var add = results[0].formatted_address
                    adress = add
                    adressBiblio.value = adress
                }
            })

            latInserir = lat
            lngInserir = lng

        }

    }

    butRemMark.addEventListener("click", function () {

        for (var i = 0; i < markers1.length; i++) {
            markers1[i].setMap(null)
        }

        markers1 = []

        localStorage.removeItem("markerAtual")

        adressBiblio.value = ""

    })

    function buscarLocal() {

        if (navigator.geolocation) {
            // Se suporta geolocalização tenta obter a sua posição
            navigator.geolocation.getCurrentPosition(showPosition)

            let latAtual1
            let latAtual2

            function showPosition(position) {
                latAtual1 = position.coords.latitude
                latAtual2 = position.coords.longitude
                mostrarMapa(latAtual1, latAtual2)
            }

        } else {
            // Não suporta geolocalização
            alert("Geolocation is not supported by this browser")

        }

    }

    /*#########################################MARKERS########################################*/

    butMarkers.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divInserirTag.style.display = "none"
        divInserirLivro.style.display = "none"
        divRequisicoes.style.display = "none"
        divFormEditUti.style.display = "none"
        divFormAddUti.style.display = "none"
        divRemUti.style.display = "none"
        divMarkers.style.display = "block"

        closeNave()

        //clearAllMarkers()

        renderAllMarkers()

    })

    function clearAllMarkers() {

        map1.clear()

    }


    function renderAllMarkers() {

        for (let i = 0; i < markers.length; i++) {

            setMarkerAll(markers[i]._lat, markers[i]._lng)

        }

    }

    function setMarkerAll(lat, lng) {

        marker = new google.maps.Marker({
            map: map1,
            animation: google.maps.Animation.BOUNCE,
            position: { lat, lng }

        })

    }

    function scrollWin(x, y) {
        window.scrollBy(x, y);
    }

}