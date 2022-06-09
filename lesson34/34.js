
function sumOfNumFor(user){
    let str = String(user);
    var num = 0;
    for (let counter = 0; counter < str.length; counter++) {
        let x = Number(str[counter]);
        var num = num + x;  
    }
    console.log(num)
}

function sumOfNumWhile(user){
    let str = String(user);
    var num = 0;
    var counter = 0;
    while (counter < str.length) {
        let x = Number(str[counter]);
        var num = num + x; 
        counter++
    } 
    console.log(num)
}


