const read = document.querySelector('.notifications p');
const list = document.querySelectorAll('.list-one li');
const dot = document.querySelectorAll('.dot');
const num = document.querySelector('.block');

read.addEventListener('click', () => {
    read.style.opacity = '0.4';
    num.innerHTML = 0;
    list.forEach((list) => {
        list.style.backgroundColor = 'white';
    });
    dot.forEach((dot) => {
        dot.style.display = 'none';
    });
})