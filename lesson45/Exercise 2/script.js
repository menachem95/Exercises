
let headLine = document.querySelector("#headline");
headLine.textContent = 0;

const text = document.querySelector("textarea");
text.addEventListener("input", updateHaedLine);

const claer = document.querySelector("#clear");
claer.addEventListener("click", clearAll);





function updateHaedLine(){
    headLine.textContent = text.value.length
}

function clearAll(){
    text.value = '';
    headLine.textContent = 0;
}