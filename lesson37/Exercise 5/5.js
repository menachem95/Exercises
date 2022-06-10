function isStrongPassword(password){
    const str = String(password)
    const pass_length = str.length > 7
    const upper = /[A-Z]/.test(str);
    const lower = /[a-z]/.test(str);
    const other = /[^\w]/.test(str);
    if (pass_length && upper && lower && other){
        return true
    }
    return false
}
