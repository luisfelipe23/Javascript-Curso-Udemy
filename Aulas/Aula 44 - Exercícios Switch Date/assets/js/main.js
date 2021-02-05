function nomeDia(numero) {
    switch (numero) {
        case 0: return "Domingo";
        case 1: return "Segunda-Feira";
        case 2: return "Terça-Feira";
        case 3: return "Quarta-Feira";
        case 4: return "Quinta-Feira";
        case 5: return "Sexta-Feira";
        case 6: return "Sábado";
    }
}

function nomeMes(numero) {
    switch (numero) {
        case 0: return "Janeiro";
        case 1: return "Fevereiro";
        case 2: return "Março";
        case 3: return "Abril";
        case 4: return "Maio";
        case 5: return "Junho";
        case 6: return "Julho";
        case 7: return "Agosto";
        case 8: return "Setembro";
        case 9: return "Outubro";
        case 10: return "Novembro";
        case 11: return "Dezembro";
    }
}

function adicionaZero (numero) {
    return (numero < 10) ? `0${numero}` : numero;
} 

function escopo () {
    const data = document.querySelector('.container');

    const dataAgora = new Date();
    data.innerHTML = `<p>${nomeDia(dataAgora.getDay())}, ${adicionaZero(dataAgora.getDate())} 
                  de ${nomeMes(dataAgora.getMonth())} de ${dataAgora.getFullYear()}<br>
                  ${adicionaZero(dataAgora.getHours())}:${adicionaZero(dataAgora.getMinutes())}</p>`;
}

escopo();
