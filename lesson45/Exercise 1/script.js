const imageCount = document.querySelectorAll(".image-slider img").length;
const consainer = document.querySelector(".images");

const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextImage)

const circlesBtns = document.querySelectorAll(".circles button")

const imageWIDTH = 400;
const lastImageOffset = -400 * (imageCount -1);
let currentImageIndex = 0;


function nextImage() {
    circlesBtns[currentImageIndex].classList.remove("fullbtn")
    currentImageIndex++;
    
    if (currentImageIndex >= imageCount) {
        currentImageIndex = 0;
    }
    const left = (currentImageIndex * -1 * imageWIDTH) + "px";
    consainer.style.left = left
    circlesBtns[currentImageIndex].classList.add("fullbtn")
    setTimeout(nextImage, 3000)
}

//setTimeout(nextImage, 3000)


