function funcao () {
    let total = 0;
    for (i of arguments) {
        total += i;
    }
    return total;
}

function funcao2 (a = 0, b = 0) {
    return a + b;
}

function funcao3 (operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
}

console.log(funcao(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(funcao2(3, 2));
funcao3('+', 0, 5, 5, 3);