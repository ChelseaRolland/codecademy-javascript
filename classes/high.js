class High extends School{
    constructor(name, level, numberOfStudents, sportsTeams){
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportsTeams;
    }

    set sportsTeams(newSportsTeam){
        if (typeof newSportsTeam === 'string') {
            return this._sportsTeams = newSportsTeam;
        } else {
            return 'You must assign a string for a sports team';
        }
    }
}