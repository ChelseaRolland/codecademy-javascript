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
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            return this._numberOfStudents = newNumberOfStudents;
        } else {
            return 'You must assign a number for the number of students!'
        }
    }

    quickFacts(){
        return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`;
    }

    static pickSubstituteTeacher(substituteTeachers){
        let randomNumber = Math.floor(Math.random * (substituteTeachers.length - 0 + 1) + 0)
        return substituteTeachers[randomNumber];
    }
}