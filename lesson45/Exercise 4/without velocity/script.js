const squaresClass = document.querySelectorAll(".squares button");
const squaresBtn = document.querySelector(".squares");

const your_score = document.querySelector("h3");
var score = 0;
your_score.textContent = score

squaresBtn.addEventListener("click", (ev)=> (changeRedPostion(ev)))

var num = Math.floor(Math.random() * 8);
var twoSeconds = setInterval(passTime, 2000)

squaresClass[num].classList.add("red-square")


function changeRedPostion(ev) {
    if (ev.srcElement.classList[0] === "squares") {
        return undefined
    }
    clearInterval(twoSeconds);
    if (ev.srcElement.classList[0] === "red-square") {
        score += 5;
    } else {
        score -= 2;
    }
    var temp_num = Math.floor(Math.random() * 8);
    while (temp_num === num) {
        temp_num = Math.floor(Math.random() * 8);
    }
    squaresClass[num].classList.remove("red-square");
    num = temp_num
    squaresClass[num].classList.add("red-square");
    twoSeconds = setInterval(passTime, 2000)
    your_score.textContent = score
}

function passTime() {
    score -= 1
    your_score.textContent = score
}


