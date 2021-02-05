function relogio () {
    function criaHoradosSegundos (segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString ('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciaSegundos () {
        timer = setInterval (function () {
            segundos++;
            relogio.innerHTML = `<p>${criaHoradosSegundos(segundos)}</p>`;
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const ele = e.target;
    
        if (ele.classList.contains ('iniciar')) {
            relogio.style.color = 'black';
            clearInterval(timer);
            iniciaSegundos();
        }
        if (ele.classList.contains ('pausar')) {
            clearInterval(timer);
            relogio.style.color = 'red';
        }
        if (ele.classList.contains ('zerar')) {
            relogio.style.color = 'black';
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
}

relogio ();