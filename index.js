const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const h1 =document.querySelector('.h1');
const check = document.querySelector('.check');
const p = document.querySelector('.p');
const button = document.querySelector('.button1');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const content = document.querySelector('.content')
const uzb = document.querySelector('.uzb');
const rus = document.querySelector('.rus');
const eng = document.querySelector('.eng');
check.addEventListener('click',function() {
    h1.style.color = 'white';
    p.style.color = 'white';
    button.style.color = 'white';
    content.style.backgroundColor = 'black';
    black.style.backgroundColor= '#F4F4F5';
})
check.addEventListener('dblclick',function () {
    h1.style.color = 'black';
    p.style.color = 'black';
    button.style.color = 'black';
    black.style.backgroundColor= 'black';
    content.style.backgroundColor = "#f4f4f5"
})
rus.addEventListener('click',function () {
    h1.textContent = "salom";
})