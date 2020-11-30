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

