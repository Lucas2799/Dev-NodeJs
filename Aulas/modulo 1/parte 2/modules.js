const numero = 100;
const mutiplos = [];

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


    //loop para numeros multiplos de 3
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0) {
            mutiplos.push(i);
        }
    }

//exportando modulo e seus objetos 
export default { soma, subtracao, mutiplicacao, divisao, texto, mutiplos };