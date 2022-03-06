//importando arquivos con diverças funções 
const operacoes = require("./modules.js")

//acessando o modulo importado com os parametros exigidos
console.log("2 +2 =", operacoes.soma(2, 2));
console.log("2 - 3 =", operacoes.subtracao(2, 3));
console.log("10 * 2 =", operacoes.mutiplicacao(10, 2));
console.log("10 /2 =", operacoes.divisao(10, 2));