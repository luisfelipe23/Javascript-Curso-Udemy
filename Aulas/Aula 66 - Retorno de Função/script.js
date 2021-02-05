// falaResto não é executada, pois ela não é chamada, porém ela guarda o valor do 'começo' informado previamente. 
function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

// Esta função retorna outra função que tem o valor passado como parâmetro "guardado".
// Neste exemplo, ele retorna uma função que "guarda" o valor do multiplicador
function criaMultiplicador (multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const fala = falaFrase ('Olá');
const resto = fala('Mundo');
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
console.log(duplica(5), triplica(5));
console.log(resto);