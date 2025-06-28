const newYork = {
  seats: 20,
  wings: 2,
  engines: 4,
  pilots: 2,
  destination: 'New York'
}

function describePlane (plane, key) {
  const value = plane[key]
  console.log(`The ${key} for the plane to ${plane.destination} is ${value}`)
}

describePlane(newYork, 'seats')
describePlane(newYork, 'pilots')