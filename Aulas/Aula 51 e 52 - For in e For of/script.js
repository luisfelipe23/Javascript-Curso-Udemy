const jogador = ['Neymar', 'Messi', 'Cristiano Ronaldo'];

for (let i in jogador) {
    console.log(i, jogador[i]);
}

console.log('\n');

const pessoa = {
    nome: 'Luis',
    sobrenome: 'Felipe',
    idade: 20
}

for (let k in pessoa) {
    console.log(pessoa[k]);
}

console.log('\n');

const nome = 'Luis Felipe';

for (let i of nome) {
    console.log(i);
}

console.log('\n');

for (let i of jogador) {
    console.log(i);
}