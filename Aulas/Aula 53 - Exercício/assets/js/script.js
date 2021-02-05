const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bcb = estilosBody.backgroundColor;

for (let i of ps) {
    i.style.backgroundColor = bcb;
    i.style.color = '#FFFFFF';
}