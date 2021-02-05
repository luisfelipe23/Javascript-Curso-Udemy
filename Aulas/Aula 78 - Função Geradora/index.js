function* gerador1 () {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador2 () {
    yield* gerador1();
    yield 3;
    yield 4;
    yield 5;
}

const valor = gerador2();

for (i of valor) {
    console.log(i);
} 