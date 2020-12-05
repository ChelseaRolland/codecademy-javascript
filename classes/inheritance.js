"use strict";

//parent class
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff;
        return this._remainingVacationDays;
    }
}

//child class
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications(){
        return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse ("Olynyk", ["Trauma", "Pediatrics"]);

console.log(nurseOlynyk.name);
console.log(nurseOlynyk.certifications)
console.log(nurseOlynyk.certifications[0]);
console.log(nurseOlynyk.certifications[1]);
console.log(nurseOlynyk.takeVacationDays(5));
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);