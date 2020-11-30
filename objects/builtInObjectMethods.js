"use strict";

const robot = {
    model: "SAL-1000",
    mobile: true,
    sentient: false,
    armor: "Steel-plated",
    energyLevel: 75
};

//Object.keys(objName) --> takes all of the properties of an object and puts their names inside of an array
const robotKeys = Object.keys(robot);
console.log(robotKeys);

//Object.entries(objName) --> takes all of the properties and their key/values and puts each of them inside of an array
const robotEntries = Object.entries(robot);
console.log(robotEntries);

//Object.assign(objName) -->
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);
console.log(robot);
