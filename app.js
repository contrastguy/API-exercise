fetch('https://aws.random.cat/meow') //pega o link da API com o fetch 
.then(function(response) {   //.then(uma função para pegar a resposta da sua request da API (parâmetro pra usar no escopo da função, com signicado de ser a resposta da request){})
console.log(response);   // pra mostrar a resposta da request da API
  response.json()     // transforma essa resposta em um JSON
  .then(function(convertido){   //esse JSON é uma promisse, logo , usa .then( função com o parâmetro transformado em JSON(){})
        console.log(convertido);  // Joga esse console.log para tirar de uma promisse pendente , e aparecer os dados transformados em JSON.
  });
});



const url = "developer.marvel.com"

fetch(url).then(function(resposta){
  console.log(resposta);
    resposta.json()
    .then(function(dadosConvertidos){
      console.log(dadosConvertidos);
    })
})