function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
   
        return a - b;
    
    }

function mutiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}
var texto = "teste exporta��o"
//exportando modulo e seus objetos 
module.exports = { soma, subtracao, mutiplicacao, divisao, texto };