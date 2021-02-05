const inputTarefa = document.querySelector('.input-tarefa');
const button = document.querySelector('.button-tarefa');
const tarefa = document.querySelector('.tarefas');

function criaLi () {
    const li = document.createElement('li');
    return li;
}

function criaTarefa (tarefas) {
    const li = criaLi();
    li.innerText = tarefas;
    criaBotao(li);
    tarefa.appendChild(li);
    salvaTarefa();
}

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotao (li) {
    li.innerText += '\t';
    const botao = document.createElement('button');
    botao.setAttribute('class', 'apagar');
    botao.setAttribute('title', 'Apagar Esta Tarefa');
    botao.innerText = 'Apagar';
    li.appendChild(botao);
}

// Enviar arquivos de inputs pelo Enter
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

button.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
});

// Fazendo botão apagar remover o elemento acompanhado dele
document.addEventListener('click', function (e) {
    const elem = e.target;

    if (elem.classList.contains('apagar')) {
        elem.parentElement.remove();
        salvaTarefa();
    }
});

function salvaTarefa () {
    const liTarefas = tarefa.querySelectorAll('li');
    let listaTarefas = [];

    for (let i of liTarefas) {
        let tarefaTexto = i.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    // Converter de String JSON para Array
    const listaTarefas = JSON.parse(tarefas);

    for (let i of listaTarefas) {
        criaTarefa(i);
    }
}

adicionaTarefasSalvas();