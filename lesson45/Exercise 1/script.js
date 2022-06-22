const imageCount = document.querySelectorAll(".image-slider img").length;
const consainer = document.querySelector(".images");

const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextImage)

const circlesBtns = document.querySelectorAll(".circles button")

const imageWIDTH = 400;
const lastImageOffset = -400 * (imageCount -1);
let currentImageIndex = 0;


for (let index = 0; index < circlesBtns.length; index++) {
    const btn = circlesBtns[index];
    btn.addEventListener("click", ()=> goToImage(index))
}


var timer = setTimeout(nextImage, 3000)


function goToImage(index) {
    clearTimeout(timer)
    circlesBtns[currentImageIndex].classList.remove("fullbtn");
    circlesBtns[index].classList.add("fullbtn");
    currentImageIndex = index;
    const left = (currentImageIndex * -1 * imageWIDTH) + "px";
    consainer.style.left = left;
    timer = setTimeout(nextImage, 3000)
}


function nextImage() {
    circlesBtns[currentImageIndex].classList.remove("fullbtn")
    currentImageIndex++;
    
    if (currentImageIndex >= imageCount) {
        currentImageIndex = 0;
    }
    const left = (currentImageIndex * -1 * imageWIDTH) + "px";
    consainer.style.left = left;
    circlesBtns[currentImageIndex].classList.add("fullbtn")
    timer = setTimeout(nextImage, 3000)}


