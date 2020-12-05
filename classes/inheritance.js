"use strict";

//parent class
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name(){
        if (typeof this._name === "string"){
            return this._name;
        } else {
            console.log("Please input a STRING for the NAME")
        }
    }

    set name(newName){
        if (typeof newName === "string"){
            this._name = newName;
        } else {
            console.log("Please enter a STRING when setting a new NAME");
        }
    }

    get remainingVacationDays(){
        if (typeof this._remainingVacationDays === "number"){
            return this._remainingVacationDays;
        } else {
            console.log("Please input a NUMBER for the remainingVacayDays");
        }
    }

    set remainingVacationDays(newRemainingVacayDays){
        if (typeof newRemainingVacayDays === "number"){
            this._remainingVacationDays = newRemainingVacayDays
        } else {
            console.log("Please input a NUMBER for the new VACAY DAYS");
        }
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff;
    }

    static generatePassword(){
        return Math.floor(Math.random() * 10000);
    }
}

//child class
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications(){
        if (typeof this._certifications === "object"){
            return this._certifications;
        } else {
            console.log("Please input an array!")
        }
    }

    set certifications(newCertifications){
        if (typeof newCertifications === "object"){
            this._certifications = newCertifications
        } else {
            console.log("Please input an array!")
        }
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

//child class
class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }

    get insurance (){
        if (typeof this._insurance === "string"){
            return this._insurance;
        } else {
            console.log("Please input a string for the insurance!")
        }
    }

    set insurance(newInsurance){
        if (typeof newInsurance === "string"){
            this._insurance = newInsurance
        } else {
            console.log("Please input a string for the insurance!")
        }
    }
}

const nurseOlynyk = new Nurse ("Olynyk", ["Trauma", "Pediatrics"]);

const doctorDude =  new Doctor("Dude", "Spiderman");

//Inheritance
console.log(nurseOlynyk.name);
console.log(nurseOlynyk.certifications)
console.log(nurseOlynyk.certifications[0]);
console.log(nurseOlynyk.certifications[1]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

console.log(doctorDude.insurance);
doctorDude.takeVacationDays(10);
console.log(doctorDude.remainingVacationDays);

nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);

//Static Methods
console.log(HospitalEmployee.generatePassword());
