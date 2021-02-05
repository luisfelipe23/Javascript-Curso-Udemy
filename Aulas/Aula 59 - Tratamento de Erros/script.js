function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}

/*
try {
    console.log(naoExiste);
} catch (e) {
    console.log('Variável não existente');
    console.log(e);
}
*/

try {
    console.log(soma(5, 2));
    console.log(soma(2, 'fd'));
} catch (e) {
    console.log(e);
}