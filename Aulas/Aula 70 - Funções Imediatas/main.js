(function (idade, peso, altura) {
    const sobrenome = 'Felipe';

    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome () {
        console.log(criaNome('Luis'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(20, 90, 1.65);