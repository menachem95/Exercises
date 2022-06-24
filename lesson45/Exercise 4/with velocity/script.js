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
    
    let isRed = false;
    for (let i = 0; i < ev.srcElement.classList.length; i++) {
        if (ev.srcElement.classList[i] === "red-square") {
            isRed = true;
        }
    }
    if (isRed) {
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


const box = document.querySelectorAll('button');
function runaway() {
    
    for (let i = 0; i < box.length; i++) {
        console.log(box[i])
        const width = document.body.clientWidth - 100;
        const x = Math.random() * width;
        const height = document.body.clientHeight - 100;
        const y = Math.random() * height;
        
        Velocity(box[i], { left: x, top: y }, { duration: 5000 });
    }
}


runaway();
setInterval(runaway, 10)
