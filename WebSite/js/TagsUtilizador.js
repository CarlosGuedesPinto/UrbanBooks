let utilizadores = []
let userLogged
let userType = ""
let userAtual = ""
let userOp = ""
let livros = []
let tags = []
let formTags

let taTagsLs = ""
let taTagsUti = ""
let butGuardarTags


window.onload = function () {

    formTags = document.getElementById("addLivro")

    taTagsLS = document.getElementById("tagsLocalStorage")
    taTagsUti = document.getElementById("tagsUtilizador")
    butGuardarTags = document.getElementById("butGuardarTags")

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


        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem("tags")))

        }

        if (localStorage.getItem("livros")) {

            livros = (JSON.parse(localStorage.getItem("livros")))

        }

        if (localStorage.getItem("userLogged")) {
            userLogged = localStorage.getItem("userLogged")
        }

    }

    //renderTableTags()
    renderTAreas()
    buttonsMenu()

    $(function () {
        // This will select everything with the class smoothScroll
        // This should prevent problems with carousel, scrollspy, etc...
        $('.smoothScroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash)
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000) // The number here represents the speed of the scroll in milliseconds
                    return false
                }
            }
        })
    })

    butGuardarTags.addEventListener("click", function(event) {

        for (let i=0;i<utilizadores.length;i++) {

            if(utilizadores[i]._id == userLogged) {

                utilizadores[i]._tags = taTagsUti.value

            }

        }

        localStorage.removeItem("utilizadores")

        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

        event.preventDefault()

    }) 
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

    let btnLogout = document.getElementById("btnLogout")

    btnLogout.style.display = "block"

    btnLogout.addEventListener("click", function () {
        userId = 0
        btnLogout.style.display = 'none'
        btnDoarLivros.style.display = 'none'
        btnBackOffice.style.display = 'none'
        btnCatalogo.style.display = 'none'
    })

}
/*
function renderTableTags() {

    let strHTML = ""
    let stringTags = []

    formTags.innerHTML = ""

    for (let i = 0; i < tags.length; i++) {

        strHTML += "<label><input class='form-control' class='tags' id='tag" + tags[i]._id + "' type='checkbox' name=''> " + tags[i]._tagNome + "</label><br>"

    }

    formTags.innerHTML = strHTML

    let idUser = localStorage.getItem("userLogged")

    for (let i = 0; i < utilizadores.length; i++) {

        if (utilizadores[i]._id == idUser) {

            let tags = utilizadores[i]._tags
            let length = tags.length

            for (let i = 1; i < length; i++) {

                if (tags.charAt(i) == "#") {

                    alert("OLA")

                    let novaTag1 = tags.slice(0, i)

                    for (let j = 0; j < tags.length; j++) {

                        alert("ENTROU EXISTE")

                        let tagExist = document.getElementById("tag"+tags[j]._id)

                        if (tagExist[i]._tagNome == novaTag1) {

                            alert("CHECK")

                            tagExist.checked = true

                        }

                    }


                }

            }

        }

    }

}*/

function renderTAreas() {

    let tagsUti

    for (let i = 0; i < tags.length; i++) {

        taTagsLS.value += tags[i]._tagNome

    }

    for (let i = 0; i < utilizadores.length; i++) {

        if (utilizadores[i]._id == userLogged) {

            tagsUti = utilizadores[i]._tags

        }

    }

    taTagsUti.value = tagsUti

    event.preventDefault()

}