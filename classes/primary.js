class Primary extends School{
    constructor(name, numberOfStudents, grades, pickupPolicy){
        super(name, 'primary', numberOfStudents, grades);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }

    set pickupPolicy(newPickupPolicy) {
        if (typeof newPickupPolicy === 'string') {
            return this._pickupPolicy = newPickupPolicy;
        } else {
            return 'You must assign a string for the pickup policy';
        }
    }
}

const lorrainHansbury = new Primary('Lorraine Hansbury', 514, [100, 98, 77, 55, 87], 'Students must be picked up by a parent, guardian, or a family memeber over the age of 13.');

console.log(lorrainHansbury.quickFacts());

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

let primaryOne = new Primary('Primary One', 111, [77, 88, 99, 33, 56],'Not now');
let primaryTwo = new Primary('Primary Two', 222, [87, 65, 44, 59, 66],'Maybe later');