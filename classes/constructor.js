"use strict";

class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    //Methods

    //getters
    get name(){
        return this._name;
    }

    get department(){
        return this._department;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays = this._remainingVacationDays - daysOff;
        return this._remainingVacationDays;
    }
}

class Employee {
    constructor(empNum, firstName, lastName, department) {
        this._empNum = empNum;
        this._firstName = firstName;
        this._lastName = lastName;
        this._department = department;
    }

    //Methods

    //getters
    get empNum(){
        return this._empNum;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get department(){
        return this._department;
    }
}

class Planet {
    constructor(name, planetNum, mainStar, size, type) {
        this._name = name;
        this._planetNum = planetNum;
        this._mainStar = mainStar;
        this._size = size;
        this._type = type;
    }

    //Methods

    //getters
    get name(){
        return this._name;
    }

    get planetNum(){
        return this._planetNum;
    }

    get mainStar(){
        return this._mainStar;
    }

    get size(){
        return this._size;
    }

    get type(){
        return this._type;
    }
}

//Instances
const surgeonDavid = new Surgeon("David", "OBGYN");

//console.log(surgeonDavid.takeVacationDays(5));

const surgeonSmokey = new Surgeon("Ole", "Brewery");
const employeeRachel = new Employee(12345, "Rachel", "Newton", "Fiance");
const planetJupiter = new Planet("Jupiter", 5, "Sol", 1000, "gas giant");


