const password = document.querySelector("#password");
password.addEventListener("input", checkPassword);

const showPower = document.querySelector("#showPower");


const gui = document.querySelector("#gui");





function checkPassword() {
    const str = String(password.value);
    const pass_length = str.length;
    const upper = /[A-Z]/.test(str);
    const lower = /[a-z]/.test(str);
    const other = /[^\w]/.test(str);
    if (pass_length >= 5 && upper && lower && other) {
            if (pass_length >= 8){
                showPower.textContent = "strong"
                return "strong"
            }
        showPower.textContent = "medium"
        return "medium"
    }
    showPower.textContent = "weak"
    return "weak"
}




