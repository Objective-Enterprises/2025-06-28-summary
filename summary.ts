// interface Plane {
//   seats: number
//   wings: number
//   engines: number
//   destination: string
// }

// Entity
const newYork = {
  seats: 20,
  wings: 2,
  engines: 4,
  pilots: 2,
  destination: 'New York'
}

type Plane = typeof newYork
type PlaneKey = 'seats' | 'wings' | 'engines' | 'pilots' | 'destination'

function describePlane (plane: Plane, key: PlaneKey) {
  const value = plane[key]
  console.log(`The ${key} for the plane to ${plane.destination} is ${value}`)
}

describePlane(newYork, 'seats')
describePlane(newYork, 'pilots')

function announcePlane (plane: Plane) {
  console.log(`Flight to ${plane.destination} carrying ${plane.seats} passengers departs soon!`)
}

announcePlane(newYork)
