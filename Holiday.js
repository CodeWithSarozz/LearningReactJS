//super class
class HolidayClass {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;

    }

    info() {
        console.log(`${this.destination} will take ${this.days} days`);
    }
}

// const trip = new HolidayClass('Kathmandu, Nepal', 30);
// console.log(trip.info());

//sub class
class Expedition extends HolidayClass {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);

console.log(tripWithGear.info());