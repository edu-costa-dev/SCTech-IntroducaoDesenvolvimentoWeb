var pessoa = require("./commons/Pessoas");
var soma = require("./commons/soma");
var imposto = require("./commons/calculoImporto")
var calculo = require("./commons/calculadora");
var calculadora = require("./commons/calculadora");

costa = pessoa();

console.log(JSON.stringify(costa))
console.log(soma(2,2));
console.log(calculadora.soma(5,5))
console.log(calculadora.subtracao(5,5))
console.log(calculadora.divisao(5,5))
console.log(calculadora.multiplicacao(5,5))

console.log("Valor do produto com o imposto: ",+imposto.adicionar(10));
console.log("Valor do imposto: "+imposto.valor(10));
console.log("Taxa de imposto: "+imposto.taxa)