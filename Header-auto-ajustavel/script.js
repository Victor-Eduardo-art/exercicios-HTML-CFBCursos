function iniciar () {
   const a = document.querySelectorAll("header nav li a")

   for (let i = 0; i < a.length; i++) {
      a[i].addEventListener("click", () => {
         for (let i2 = 0; i2 < a.length; i2++) {
            a[i2].classList.remove("ativo")
         }

         event.target.classList.add("ativo")
      })
   }

   window.addEventListener("scroll", () => {
      ajustarMenu()
   })
}

function ajustarMenu () {
   if (document.documentElement .scrollTop >= 80) {
      document.getElementsByTagName("header")[0].classList.add("diminuirMenu")
   } else {
      document.getElementsByTagName("header")[0].classList.remove("diminuirMenu")
   }
}

window.addEventListener("load", iniciar)
