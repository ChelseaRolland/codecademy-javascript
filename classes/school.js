class School {
    constructor(name, level, numberOfStudents, grades){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
        this._grades = grades;
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

    get grades(){
        return this.grades;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            return 'You must assign a number for the number of students!'
        }
    }

    set grades(newGrades) {
        if (typeof newGrades === 'object') {
            this._grades = newGrades;
        } else { 
            return 'You must assign an array for the grades';
        }
    }

    quickFacts(){
        return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`;
    }

    static pickSubstituteTeacher(substituteTeachers){
        const randomNumber = Math.floor(Math.random() * (substituteTeachers.length));
        return substituteTeachers[randomNumber];
    }

    averageGrades(schoolGrades){
        const sumGrades = schoolGrades.reduce((total, grade)=> {
            return total + grade
        }, 0);
        return sumGrades / schoolGrades.length;
    }
}