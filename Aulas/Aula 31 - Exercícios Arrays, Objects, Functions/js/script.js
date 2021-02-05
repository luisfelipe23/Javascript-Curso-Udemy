function escopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector(".Resultado");

    const pessoas = [];
    
    function  criarPessoa (nome, sobrenome, peso, altura) {
        return {
            nome: nome, 
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
    };

    function recebeEvento(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa = criarPessoa (nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push(pessoa);
        console.log(nome.value, sobrenome.value, peso.value, altura.value);
        
        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
    }

    form.addEventListener('submit', recebeEvento);

}

escopo ();