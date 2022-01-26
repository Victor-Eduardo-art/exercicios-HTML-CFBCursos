function iniciar () {
    const itensMenu = document.querySelectorAll("[data-menu]")
    const classAtivo = "ativo"

    itensMenu.forEach (function (elemento) {
        elemento.addEventListener("click", () => {
            for (let i = 0; i < itensMenu.length; i++) {
                itensMenu[i].classList.remove(classAtivo)
            }

            elemento.classList.add(classAtivo)
        })
    })

    const btnMenu = document.getElementsByClassName("btnMenu")[0]
    const menu = document.getElementsByClassName("menu")[0]

    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("menuAberto")
    })
}

window.addEventListener("load", iniciar)