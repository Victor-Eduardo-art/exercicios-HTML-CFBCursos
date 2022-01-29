function iniciar () {
   const menu = document.getElementsByTagName("aside")[0]
   const principal = document.getElementsByTagName("section")[0]

   document.getElementsByClassName("icone-menu-2")[0].addEventListener("click", () => {
      menu.classList.toggle("mostraMenu")
      principal.classList.toggle("margin-left-Principal")
   })
   
   document.getElementsByClassName("btnFechar")[0].addEventListener("click", () => {
      menu.classList.toggle("mostraMenu")
      principal.classList.toggle("margin-left-Principal")

      // menu.classList.remove("mostraMenu")
      // menu.classList.add("menuOculto")

      // principal.classList.remove("margin-left-Principal")

   })
}

window.addEventListener("load", iniciar)