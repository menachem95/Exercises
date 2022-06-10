function guessing(){
    number = random();
    const guess = prompt("please guees a number...")
    if ( guess > number){
        console.log("Too big");
    } else if (number > guess){
        console.log("Too small");
    } else {
        console.log("Bingo!");
    }
}

function random(num1=100, num2=0){
    if (num1 === num2){
        console.log("error")
        return NaN
    }
    var big = 100;
    var small = 0;
    if (num2 > num1){
        var big = num2;
        var small = num1;
    } else {
        var big = num1;
        var small = num2;
    }  
    return (big - small) * Math.random() + small
}
