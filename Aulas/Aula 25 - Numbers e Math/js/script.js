const numero = Number (prompt('Informe um número: '));
const titulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

titulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arrendodado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arrendodado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;