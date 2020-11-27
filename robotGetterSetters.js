"use strict";

const robot = {
    _name: "Coven",
    _model: "1E78V2",
    _energyLevel: 100,
    _numOfSensors: 15,
    get energyLevel(){
        if (typeof (this._energyLevel) === "number"){
            return `My current energy level is ${this._energyLevel}`;
        }else {
            return `System malfunction: cannot retrieve energy level`;
        }
    },
    get numOfSensors(){
        if (typeof (this.numOfSensors) === "number"){
            return this.numOfSensors;
        } else {
            return "Sensors are currently down."
        }
    }
}
console.log(robot.energyLevel);
console.log(robot.numOfSensors);