class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        if (level === 'primary' || level === 'middle' || level === 'high') {
            return this._level;
        } else {
            return 'Please enter a the correct school level: primary, middle, or high';
        }
    }

    get numberOfStudents(){
        if (typeof numberOfStudents === 'number') {
            return this._numberOfStudents;
        } else {
            return 'Please enter a number!'
        }
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            return this._numberOfStudents = newNumberOfStudents;
        } else {
            return 'You must assign a number for the number of students!'
        }
    }

    quickFacts(){}

    static pickSubstituteTeacher(){}
}