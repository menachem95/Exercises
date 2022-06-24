const password = document.querySelector("#password");
password.addEventListener("input", checkPassword);

const showPower = document.querySelector("#showPower");


const gui = document.querySelector("#gui");
gui.style.width = "0%"




function checkPassword() {
    const str = String(password.value);
    const pass_length = str.length;
    const upper = /[A-Z]/.test(str);
    const lower = /[a-z]/.test(str);
    const other = /[^\w]/.test(str);
    const number = /[0-9]/.test(str);

    if (pass_length === 0){
        gui.style.width = "0%"
    } else if (pass_length < 3) {
        gui.style.width = "20%"
    } else if (pass_length < 5) {
        gui.style.width = "50%" 
    } else if (pass_length < 7) {
        gui.style.width = "80%"
    } else if (pass_length < 8) {
        gui.style.width = "100%"
    }


    if (pass_length === 0) {
        showPower.textContent = "none"
        return "none"
    }
    if (pass_length >= 5 && upper && lower && other && number) {
            if (pass_length >= 8){
                showPower.textContent = "strong"
                gui.style.backgroundColor = "green"
                gui.style.maxWidth = "100%"
                return "strong"
            }
        showPower.textContent = "medium"
        gui.style.backgroundColor = "orange"
        gui.style.maxWidth = "70%"
        return "medium"
    }
    showPower.textContent = "weak"
    gui.style.backgroundColor = "red"
    gui.style.maxWidth = "30%"
    return "weak"
}




