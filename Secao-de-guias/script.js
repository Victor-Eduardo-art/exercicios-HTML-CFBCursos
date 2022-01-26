function iniciar () {
   const btnTabs = document.getElementsByClassName("btnTabs")

   for (let i=0; i < btnTabs.length; i++) {
      btnTabs[i].addEventListener("click", () => {
         const conteudoTabs = document.getElementsByClassName("conteudoTabs")

         for (let i = 0; i < btnTabs.length; i++) {
            conteudoTabs[i].style.display = "none"
            btnTabs[i].classList.remove("ativo")
         }

         document.getElementById(event.target.getAttribute("id") + "A").style.display = "block"
         event.target.classList.add("ativo")
      })
   }
}

function fechar (elemento) {
   let resTmp = elemento.getAttribute("id").search("A")
   let res = elemento.getAttribute("id").slice(0, resTmp)
   const btnTabs = document.getElementById(res)

   elemento.style.display = "none"
   btnTabs.classList.remove("ativo")
}

window.addEventListener("load", iniciar)
