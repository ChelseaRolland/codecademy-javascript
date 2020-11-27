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
        if (typeof (this._numOfSensors) === "number"){
            return this._numOfSensors;
        } else {
            return "Sensors are currently down."
        }
    },

    set energyLevel(newLevel){
        if (typeof newLevel === "number"){
            return this._energyLevel = newLevel;
        } else {
            return "Please enter a number for the energy level";
        }
    },

    set numOfSensors(num){
        if (typeof num === "number" && num >= 0){
            return this._numOfSensors = num;
        } else {
            return "Pass in a number that is great than or equal to 0";
        }
    }
}
console.log("getter energyLevel = ",robot.energyLevel);
console.log("getter numOfSensors = ",robot.numOfSensors);

//setter for numOfSensors
robot.numOfSensors = 100;
console.log("getter for numOfSensors updated by setter = ", robot.numOfSensors);