var calculadora = require("./calculadora")

console.log("hello world!");
const site = 'www.google.com'

var mostrarSite = false;



if(mostrarSite){
    console.log(site);
}





console.log(calculadora.soma(10,20));
let resultado = calculadora.multiplicacao(10,10);
console.log(resultado)
let resultadoMultiplicacao = calculadora.soma(resultado,20);
console.log(resultadoMultiplicacao);
console.log(calculadora.divisao(resultadoMultiplicacao,2));





