interface Vehicle {
  position: number
  speed: number
}

export class Plane implements Vehicle {
  position: number
  speed: number
  manufacturer: string
  private seats: number
  reservations: number

  constructor () {
    this.position = 0
    this.speed = 1000
    this.manufacturer = 'Boeing'
    this.seats = 20
    this.reservations = 0
  }

  getOpenSeats () {
    return this.seats - this.reservations
  }

  reserve () {
    this.reservations += 1
  }
}
const plane = new Plane()

const boat: Vehicle = {
  position: 100,
  speed: 50
}
function pilot (vehicle: Vehicle) {
  vehicle.position += vehicle.speed
  console.log('Piloted to:', vehicle.position)
}
pilot(boat)
pilot(plane)