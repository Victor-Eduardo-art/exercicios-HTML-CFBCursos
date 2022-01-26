function iniciar () {
   window.location.href = "file:///home/victor-art/Documentos/Projetos/Projetos-CFB-cursos/Page-layout-FULL-page/index.html#banner"

   const cursosImg = document.getElementsByClassName("mini")

   for (let i = 0; i < cursosImg.length; i++) {
      cursosImg[i].addEventListener("click", function () {
         cliqueImgModal(event.target)
      })
   }

   // animação de rolagem
   const elementos = document.querySelectorAll('[data-anima]')
   
   window.addEventListener('scroll', () => {
      animaScroll(elementos)
   })

}

function animaScroll (elementos) {
   const topoPagina = window.pageYOffset+((window.innerHeight*3)/4)

   elementos.forEach(function (elemento) {
      alert(elemento.offsetTop)

      if (topoPagina > elemento.offsetTop) {
         elemento.setAttribute('class', 'animacao')
      }else {
         elemento.removeAttribute('class')
      }
   })
}

function cliqueImgModal (img) {
   const janelaModal = document.getElementById("janelaModal")
   const imgModal = document.getElementById("imgModal")
   const descricao = document.getElementById("descricao")
   const btnFechar = document.getElementById("btnFechar")

   imgModal.src = img.src
   imgModal.alt = img.alt
   descricao.innerHTML = img.alt

   janelaModal.classList.remove("esconderJanelaModal")
   janelaModal.classList.add("mostrarJanelaModal")

   btnFechar.addEventListener("click", () => {
      janelaModal.classList.remove("mostrarJanelaModal")
      janelaModal.classList.add("esconderJanelaModal")
   })
}

window.addEventListener("load", iniciar);