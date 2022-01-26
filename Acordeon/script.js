function iniciar () {
   const acordeonB = document.getElementsByClassName("b-acordeon")

   for (let i = 0; i < acordeonB.length; i++) {
      acordeonB[i].addEventListener("click", function () {
         this.classList.toggle("ativo")
         const painel = this.nextElementSibling;

         if (painel.style.maxHeight) {
            painel.style.maxHeight = null
         } else {
            painel.style.maxHeight = painel.scrollHeight+"px"
         }
      })
   }
}

window.addEventListener("load", iniciar)
