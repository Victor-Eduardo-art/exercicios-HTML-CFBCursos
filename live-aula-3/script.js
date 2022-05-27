function getAPI (url) {
   const containerArtigos = document.getElementsByClassName("containerArtigos")[0]

   fetch(url)
      .then((res) => {
         if (res.status == 200) {
            console.log("Dados da API-teste obtidos com sucesso")
         } else {
            if (res.status == 404) {
               console.log("Erro ao achar a API")
               return new Error("Erro ao achar a API")
            }
         }
         
         return res.json()
      })
      .then((res) => {
         res.map((obj) => {
            const article = document.createElement("article")
            const h1 = document.createElement("h1")
            const p = document.createElement("p")

            h1.innerHTML = obj.titulo
            p.innerHTML = obj.desc

            article.appendChild(h1)
            article.appendChild(p)
            containerArtigos.appendChild(article)
         })
      })
      .catch(()=> {console.log("Falha ao obter dados da API-teste")})
}

function iniciar () {
   const urlAPI = 'https://api-teste.victor-eduardo.repl.co'

   getAPI(urlAPI)
}

window.addEventListener("load", iniciar)
