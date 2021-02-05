function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        get nomeCompleto () {
            return `Seu nome completo é ${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto (nomeSobrenome) {
            nomeSobrenome = nomeSobrenome.split(' ');
            this.nome = nomeSobrenome.shift();
            this.sobrenome = nomeSobrenome.join(' ');
        },

        get geraIMC () {
            return (this.peso / this.altura ** 2).toFixed(2);
        },

        falaMensagem (mensagem = "Sonhe") {
            return `${this.nome} ${this.sobrenome}: ${mensagem}`;
        }
    }
}

p1 = criaPessoa ('Luis', 'Felipe', 1.65, 90);
p1.nomeCompleto = "Abel Braga Pinto";
p1.nome = "Luis";
console.log(p1.nomeCompleto);