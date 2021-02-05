function Calculadora () {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotao();
        this.validaEnter();
    };

    this.validaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode == 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = () => {
        let resultado = this.display.value;

        try {
            resultado = eval(resultado);

            if (!resultado) {
                alert('Expressão inválida!');
                return;
            }

            this.display.value = resultado;
        } catch (e) {
            alert('Deu algo errado!');
            return;
        }
    };

    this.cliqueBotao = () => {
        document.addEventListener ('click', e => {
            const elemento = e.target;

            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            }
            if (elemento.classList.contains('btn-del')) {
                this.display.value = this.display.value.slice(0, -1);
            }
            if (elemento.classList.contains('btn-clear')) {
                this.display.value = '';
            }
            if (elemento.classList.contains('btn-igual')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora ();
calculadora.inicia();