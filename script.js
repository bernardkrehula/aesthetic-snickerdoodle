const read = document.querySelector('.notifications p');
const list = document.querySelectorAll('.list-one li');

read.addEventListener('click', () => {
    read.style.opacity = '0.4';
    list.forEach((list) => {
        list.style.backgroundColor = 'white';
    })
})