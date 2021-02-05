function criaCalculadora () {
    return {
        display: document.querySelector('.display'),
        inicia () {
            this.cliqueBotao();
            this.validaEnter();
        },

        validaEnter () {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta (expres) {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Expressão inválida!');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Deu algo errado!');
                return;
            }
        },

        cliqueBotao () {
            document.addEventListener('click', e => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.display.value = '';
                }

                if (elemento.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1);
                }

                if (elemento.classList.contains('btn-igual')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay (valor) {
            this.display.value += valor;
        }
    }
}

calculadora = criaCalculadora();
calculadora.inicia();