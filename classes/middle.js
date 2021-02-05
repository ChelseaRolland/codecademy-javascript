class Middle extends School {
    constructor(name, numberOfStudents){
        super(name, 'middle', numberOfStudents);
    }
}

let middleOne = new Middle('Middle One', 420);
let middleTwo = new Middle('Middle Two', 240);