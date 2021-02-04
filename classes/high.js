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
            return 'You must assign a string for a sports team';
        }
    }
}