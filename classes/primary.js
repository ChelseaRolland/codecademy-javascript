class Primary extends School{
    constructor(name, level, numberOfStudents, pickupPolicy){
        super(name, level, numberOfStudents);
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