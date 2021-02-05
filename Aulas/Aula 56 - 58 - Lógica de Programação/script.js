function max (x, y) {
    return x > y ? x : y;
}

const isPaisagem = (l, a) => l >= a;

function fizzOrBuzz (e) {
    if (typeof e !== 'number') return e;
    if (e % 3 === 0) {
        if (e % 5 === 0) return "FizzBuzz";
        return "Fizz";
    }
    if (e % 5 === 0) return "Buzz";
    return e;
}

console.log(max(5, 9));
console.log(`1920 * 1080 é paisagem? ${isPaisagem(1080, 1080)}`);

for (let i = 0; i < 100; i++) {
    console.log(i, fizzOrBuzz(i));
}