"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = require("./vehicle");
const plane = new vehicle_1.Plane();
plane.reserve();
plane.reserve();
console.log('How many seats are left on the plane?');
console.log(plane.getOpenSeats());
