fetch('https://aws.random.cat/meow')
.then(function(response) {
console.log(response);
  response.json()
  .then(function(convertido){
        console.log(convertido);
  });
});
