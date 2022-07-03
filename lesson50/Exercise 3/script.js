
class Car {
    constructor(color, speed=0) {
      this.color = color;
      this.speed = speed;
    }
  
    drive(speed) {
      this.speed = speed;
    }
  
    isFasterThan(other) {
      return this.speed > other.speed;
    }
}
  
class Race {
    addCars(car1, car2, car3) {
        this.cars = [car1, car2, car3]
    }

    winner() {
        let the_fastest_car;
        for (let i = 0; i < this.cars.length; i++) {
            for (let j = 0; j < this.cars.length; j++) {
                if (this.cars[i].isFasterThan(this.cars[j])) {
                    the_fastest_car = this.cars[i];
                }
            } 
        }
        return the_fastest_car.color;
    }
}