import Media from "./Media";

class Cd extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
        this._songTitle = "Untitled";
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

    get songTitle(){
        if (typeof this._songTitle === "string"){
            return this._songTitle;
        } else {
            console.error("This is NOT a STRING");
        }
    }

    set songTitle(newSongTitle){
        if (typeof newSongTitle === "string"){
            this._songTitle = newSongTitle;
        } else {
            console.error("Please input a STRING for the NEW SONG TITLE");
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

    shuffle(){
        /* Stack Overflow  Explanation -->

        It picks a random element for each original array element, and excludes it from the next draw, like picking randomly from a deck of cards.

        This clever exclusion swaps the picked element with the current one, then picks the next random element from the remainder, looping backwards for optimal efficiency, ensuring the random pick is simplified (it can always start at 0), and thereby skipping the final element. */

        //Do not want the current array to change so create a copy of the array
        let songArr = this._songs.slice(0);
        for (let i = songArr.length - 1; i > 0; i--){
            //create a randomIndex and the TEMP value to store when shuffling the values
            let randomIndex =  Math.floor(Math.random() * (i + 1));

            //setting the tempValue to be the currentValue of the place in the Array
            let tempValue = songArr[i];

            //updating the currentValue to the value of the randomIndex
            songArr[i] = songArr[randomIndex];

            //storing the random index to the temp Value
            songArr[randomIndex] = tempValue;
        }
        return songArr;
    }
}