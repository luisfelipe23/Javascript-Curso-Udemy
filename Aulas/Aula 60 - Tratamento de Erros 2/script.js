function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new RangeError ('Esperando instância de date');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    console.log("Hora Inválida!");
} finally {
    console.log("Fim do Programa");
}
