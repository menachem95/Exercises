function sumOfNum(user){
    let str = String(user);
    var num = 0
    for (let counter = 0; counter < str.length; counter++) {
        const x = Number(str[counter]);
        var num = num + x;
    }
    console.log(num)
}