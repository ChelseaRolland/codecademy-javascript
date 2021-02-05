class Primary extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
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

const lorrainHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family memeber over the age of 13.');

console.log(lorrainHansbury.quickFacts());

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

let primaryOne = new Primary('Primary One', 111, 'Not now');
let primaryTwo = new Primary('Primary Two', 222, 'Maybe later');