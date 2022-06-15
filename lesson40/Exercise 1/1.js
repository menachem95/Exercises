
let res = ""
for (let i = 1; i <= 10; i++){
    res += "<tr>";
    for (let j = 1; j <= 10; j++){
        res += `<td > ${i*j} </td>`
    }
    res += "</tr>"
}

const t = document.querySelector("tbody");
t.innerHTML = res;


for (let elment of document.querySelector("tbody").childNodes) {
    for (let num of elment.childNodes) {
        if (Number(num.textContent)%3 === 0) {
            num.classList.add("_3")
        }
    }
}

