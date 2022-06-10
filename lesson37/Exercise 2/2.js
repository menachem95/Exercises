const cars = [ { name: 'c1', color: 'red', speed: 40 },
               { name: 'c2', color: 'blue', speed: 70 },
               { name: 'c3', color: 'yellow', speed: 50 },
            ];

function getFastestCar(list){
    var num = 0;
    for (const car of list) {
        if (car.speed > num){
            var num = car.speed;
        }
    }
    for (const car of list) {
        if (car.speed == num){
            return car
        }
    }
}

const fastestCar = getFastestCar(cars);
//console.log(fastestCar.name)