const numero = 1000;
const mutiplos = [];
const par = [];
const impar = [];
const mutiplo = [];

//loop para numeros multiplos de 3
for (let i = 0; i < numero; i++) {
    if ((i % 3 === 0) {
        mutiplos.push(i);
    }
}

//loop para numeros pares
for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
        par.push(i);
    }
}

//loop para numeros impares
for (let i = 0; i <= numero; i++) {
    if (i % 2 === 1) {
        impar.push(i);
    }
}

//mutiplos de 5
for (let i = 0; i <= numero; i++) {
    if (i % 5 === 0) {
        mutiplo.push(i);
    }
}

//retorno de numeros mutiplos de 3
console.log("mutiplos de 3", mutiplos)


//retorno de numeros pares
console.log("numéros pares", par)


//retorno de numeros impares
console.log("numéros impares", impar)


//retorno de numeros mutiplos de 5
console.log("numéros mutiplos de 5", mutiplo)