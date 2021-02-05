function criarPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };

}

const pessoa1 = criarPessoa ("Luis", "Vieira", 20);
const pessoa2 = criarPessoa ("Maria", "Vieira", 10);

console.log(pessoa1, pessoa2);