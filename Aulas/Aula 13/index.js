const nome = 'Luis Felipe';
const sobrenome = 'Torres';
const idade = 20;
const peso = 90;
const altura = 1.65;
let imc = peso / (altura * altura);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'e seu IMC é de', imc);
console.log(nome, 'nasceu em', 2020 - idade);