function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.imprimeNome = () => {
        return this.nome + ' ' + this.sobrenome;
    };
}

p1 = new Pessoa ('Luis', 'Felipe');
console.log(p1.imprimeNome());