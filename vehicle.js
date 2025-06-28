"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = void 0;
class Plane {
    constructor() {
        this.position = 0;
        this.speed = 1000;
        this.manufacturer = 'Boeing';
        this.seats = 20;
        this.reservations = 0;
    }
    getOpenSeats() {
        return this.seats - this.reservations;
    }
    reserve() {
        this.reservations += 1;
    }
}
exports.Plane = Plane;
const plane = new Plane();
const boat = {
    position: 100,
    speed: 50
};
function pilot(vehicle) {
    vehicle.position += vehicle.speed;
    console.log('Piloted to:', vehicle.position);
}
pilot(boat);
pilot(plane);
