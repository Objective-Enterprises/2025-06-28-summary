import { Plane } from "./vehicle"

const plane = new Plane()
plane.reserve()
plane.reserve()

console.log('How many seats are left on the plane?')
console.log(plane.getOpenSeats())