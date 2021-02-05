function escopo() {
    // Captura formulário
    const form = document.querySelector('#form');

    form.addEventListener('submit', function(e) {
        // Não deixar o formulário ser enviado
        e.preventDefault();
        console.log('Entrou');
        // Aqui estamos capturando os inputs, não um valor em si
        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');

        // Capturando os valores dos inputs
        const peso = inputPeso.value;
        const altura = inputAltura.value;

        if (!peso && !altura){
            escreveResultado('Peso e altura inválidos!', false);
            return;
        }
        else if (!peso){
            escreveResultado('Peso inválido!', false);
            return;
        }
        else if (!altura){
            escreveResultado('Altura inválida!', false);
            return;
        }
        else {
            imc = calculaIMC(peso, altura);
            condicao = defineCondicao(imc);
            escreveResultado(`Seu IMC é: ${imc} (${condicao})`, true);
        }
    });

    function defineCondicao (imc) {
        condicao = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

        if (imc >= 40) return condicao[5];
        if (imc >= 35) return condicao[4];
        if (imc >= 30) return condicao[3];
        if (imc >= 25) return condicao[2];
        if (imc >= 18.5) return condicao[1];
        else return condicao[0];
    }

    function calculaIMC (peso, altura) {
        imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function escreveResultado (msg, valido) {
        const resultado = document.querySelector('#Resultado');
        resultado.innerHTML = '';
        const p = criaParagrafo();

        if (valido){
            // Cria classe válida
            p.classList.add('paragrafo-resultado');
        }
        else {
            // Cria classe inválida
            p.classList.add('paragrafo-invalido');
            alert('Informação Inválida!');
        }
        p.innerHTML = msg;
        // Adiciona p ao resultado
        resultado.appendChild(p);
    }

    function criaParagrafo() {
        // Cria um parágrafo
        const p = document.createElement('p');
        return p;
    }
}

escopo();