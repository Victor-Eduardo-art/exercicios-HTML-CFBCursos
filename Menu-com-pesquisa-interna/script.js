function iniciar () {
   document.getElementById("pesquisa").addEventListener("keyup",  function () {
      const input = document.getElementById("pesquisa")
      const menu = document.getElementById("menu")
      const itensMenu = document.querySelectorAll(".menu li")
      let filtro = input.value.toUpperCase()
      
      for (let i = 0; i < itensMenu.length; i++) {
         const links = document.querySelectorAll(".menu li a")[i]

         if (links.innerHTML.toUpperCase().indexOf(filtro) != -1) {
            itensMenu[i].style.display = "block"
         } else {
            itensMenu[i].style.display = "none"
         }
      }
   })
}

window.addEventListener("load", iniciar)
