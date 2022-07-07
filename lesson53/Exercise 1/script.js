class LenOfText {
    constructor(el) {
        el.innerHTML = `
            <p class="len">0</p>
            <textarea class="text"></textarea>
        `
        this.len = el.querySelector(".len");
        this.text = el.querySelector(".text");
        this.text.addEventListener("input", this.textLength)
    }

    textLength = ()=> {
        this.len.textContent = this.text.value.length;
    }

}

const el = document.createElement("div");
document.body.appendChild(el);

const c1 = new LenOfText(el)