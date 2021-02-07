class High extends School{
    constructor(name, numberOfStudents, grades, sportsTeams){
        super(name, 'high', numberOfStudents, grades);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportsTeams;
    }

    set sportsTeams(newSportsTeam){
        if (typeof newSportsTeam === 'object') {
            return this._sportsTeams = newSportsTeam;
        } else {
            return 'You must assign an array for a sports team';
        }
    }
}

const alSmith = new High('Al E. Smith', 415, [91, 81, 25, 34, 55], ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

let highOne = new High('High One', 333, [45, 65, 35, 25, 85], ['yay']);
let highTwo = new High('High Two', 444, [94, 62, 74, 81, 92], ['dude']);