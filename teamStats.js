"use strict";

//creating a data structure to store info about our team
const team = {

    //properties
    _players: [],
    _games: [],

    //getters
    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    //setters
    // set players(newPlayer){
    //     return this._players = newPlayer;
    // },
    //
    // set games(newGame){
    //     return this._games = newGame;
    // }

    //methods
    addPlayer(firstName, lastName, age){
        //Create a new player
        let player = {
            firstName,
            lastName,
            age
        };

        //add the player to the players property array
        this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints){
        //Create a new game object
        let game = {
            opponent,
            teamPoints,
            opponentPoints
        };

        //add the game to the games property array
        this.games.push(game);
    }
};

//adding team players
team.players.push({
    firstName: "Coven",
    lastName: "Lewis",
    age: 13
});

team.players.push({
    firstName: "Emilio",
    lastName: "Johnson",
    age: 14
});

team.players.push({
    firstName: "Gabby",
    lastName: "Legend",
    age: 12
});

//console.log(team.players);

//adding games
team.games.push({
    opponent: "Io Rhinos",
    teamPoints: 42,
    opponentPoints: 27
});

team.games.push({
    opponent: "Bash Renegades",
    teamPoints: 35,
    opponentPoints: 31
});

team.games.push({
    opponent: "Hallow Lighters",
    teamPoints: 55,
    opponentPoints: 13
});


//console.log(team.games);

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

//console.log(team.players);

team.addGame("Cowboys", 13, 9);
team.addGame("Browns", 7, 3);
team.addGame("Ravens", 17, 13);

//console.log(team.games);