"use strict";

class Cd extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    //getters and setters
    get artist(){
        if (typeof this._artist === "string"){
            return this._artist;
        } else {
            console.error("This is NOT a STRING!");
        }
    }

    set artist(newArtist){
        if (typeof newArtist === "string"){
            this._artist = newArtist;
        } else {
            console.error("Please input a STRING for NEW ARTIST");
        }
    }

    get songs(){
        if (typeof this._songs === "object"){
            return this._songs;
        } else {
            console.error("This is NOT an OBJECT");
        }
    }

    set songs(newListOfSongs){
        if (typeof newListOfSongs === "object"){
            this._songs = newListOfSongs;
        } else {
            console.error("Please input an ARRAY for the LIST OF SONGS");
        }
    }

    //method
    addSong(newSong){
        if (typeof newSong === "string"){
            this._songs.push(newSong);
        } else {
            console.error("Please use a STRING for SONG to add to songs ARRAY");
        }
    }
}