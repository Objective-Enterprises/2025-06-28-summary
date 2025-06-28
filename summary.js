"use strict";
// Entity
const newYork = {
    seats: 20,
    wings: 2,
    engines: 4,
    destination: 'New York'
};
function announcePlane(plane) {
    console.log(`Flight to ${plane.destination} carrying ${plane.seats} passengers departs soon!`);
}
announcePlane(newYork);
console.log(typeof newYork);
