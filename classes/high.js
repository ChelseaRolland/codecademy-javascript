class High extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
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

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);