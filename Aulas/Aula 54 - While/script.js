function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let i = 0;

while (i !== 10) {
    i = random(1, 1000);
    console.log(i);
}