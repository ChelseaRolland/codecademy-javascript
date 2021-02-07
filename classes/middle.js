class Middle extends School {
    constructor(name, numberOfStudents, grades){
        super(name, 'middle', numberOfStudents, grades);
    }
}

let middleOne = new Middle('Middle One', 420, [33, 44, 55, 66, 77]);
let middleTwo = new Middle('Middle Two', 240, [99, 100, 66, 54, 32]);