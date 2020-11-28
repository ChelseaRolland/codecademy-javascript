"use strict";

// const robotFactory = (model, mobile) => {
//     return {
//         model: model,
//         mobile: mobile,
//         beep() {
//             console.log("Beep Boop");
//         }
//     }
// }

//Refactoring using the ES6 Property Value Shorthand
//The properties must be in order of parameters
const robotFactory = (model, mobile) => {
    return {
        model,
        mobile,
        beep(){
            console.log("Beep Boop");
        }
    }
}


const tinCan = robotFactory("P-500", true);
tinCan.beep();

const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

//Deconstructing Assignment
const robot = {
    model: "1E78V2",
    energyLevel: 100,
    functionality: {
        beep(){
            console.log("Beep Boop");
        },
        fireLaser(){
            console.log("Pew Pew");
        }
    }
}

const {functionality} = robot;
functionality.beep();
functionality.fireLaser();

