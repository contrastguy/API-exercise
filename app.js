fetch('https://aws.random.cat/meow') //pega o link da API com o fetch 
.then(function(response) {   //.then(uma função para pegar a resposta da sua request da API (parâmetro pra usar no escopo da função, com signicado de ser a resposta da request){})
console.log(response);   // pra mostrar a resposta da request da API
  response.json()     // transforma essa resposta em um JSON
  .then(function(convertido){   //esse JSON é uma promisse, logo , usa .then( função com o parâmetro transformado em JSON(){})
        console.log(convertido);  // Joga esse console.log para tirar de uma promisse pendente , e aparecer os dados transformados em JSON.
  });
})

// -----------------------------------------------


const url = "https://api.nasa.gov/planetary/apod?api_key=tjW7CGUXiCbJkCv4CteFR5hKJFabWAywYp3blTR9"

fetch(url).then(function(resposta){
  console.log(resposta);
    resposta.json()
    .then(function(dadosConvertidos){
      console.log(dadosConvertidos);

      let imagem = document.createElement("img")
      imagem.setAttribute("src",dadosConvertidos.url)
      document.getElementById("divImagem").append(imagem)  // a ideia é você pegar a parte colocar a imagem/dado no HTML , dentro do segundo .then() , usando o setAttribute na variável , colocando como parâmetro o ("src"v, nome do atributo do dado da API que foi transformado em JSON) e depois jogar em uma div com append 
    })
})


