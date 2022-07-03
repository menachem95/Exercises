var b1 = document.querySelector('#btn1');
var b2 = document.querySelector('#btn2');
var panel = document.querySelector('p');

function writeText(text) {
  return ()=> panel.textContent = text
}

b1.addEventListener('click', writeText('Yo'));
b2.addEventListener('click', writeText('Nice To Meet You'));