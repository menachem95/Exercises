const game = [
    [' ', 'o', ' '],
    ['x', 'x', 'o'],
    [' ', 'o', ' '],
];

function whoWon(main_list){
    const first_row = main_list[0];
    const second_row = main_list[1];
    const third_row = main_list[2];
    let counter = 0
    for (let char of first_row){
        if (char !== " " && char === second_row[counter] && char === third_row[counter]){
            console.log(`the winner is ${char}!`)
            return char
        }
        counter ++
    }

    for (let char of main_list){
        if (char[0] !== " " && char[0] === char[1] && char[0] === char[2]){
            console.log(`the winner is ${char[0]}!`)
            return char[0]
        }
    }

    if (first_row[0] !== " " && first_row[0] === second_row[1] && first_row[0] === third_row[2]){
        console.log(`the winner is ${first_row[0]}!`)
        return first_row[0]
    }

    if (first_row[2] !== " " && first_row[2] === second_row[1] && first_row[2] === third_row[0]){
        console.log(`the winner is ${first_row[2]}!`)
        return first_row[2]
    }

    console.log("no one won...")
    return undefined