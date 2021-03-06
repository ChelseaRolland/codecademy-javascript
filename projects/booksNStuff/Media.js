//export {Media};


//parent class
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    //getters and setters
    get title(){
        if (typeof this._title === "string"){
            return this._title;
        } else {
            console.error("This is not a STRING");
        }
    }

    set title(newTitle){
        if (typeof newTitle === "string"){
            this._title = newTitle;
        } else {
            console.error("Please input a STRING for the TITLE!")
        }
    }

    get isCheckedOut(){
        if (typeof this._isCheckedOut === "boolean"){
            return this._isCheckedOut;
        } else {
            console.error("This is not a BOOLEAN");
        }
    }

    set isCheckedOut(newStatus){
        if (typeof newStatus === "boolean"){
            this._isCheckedOut = newStatus;
        } else {
            console.error("Please input a BOOLEAN for the STATUS!")
        }
    }

    get rating(){
        if (typeof this._ratings === "object"){
            return this._ratings;
        } else {
            console.error("This is not an ARRAY");
        }
    }

    set rating(newRatings){
        if (typeof newRatings === "object"){
            this._ratings = newRatings;
        } else {
            console.log("Please input an ARRAY for the NEWRATINGS");
        }
    }

    //methods
    getAverageRatings(){
        let total = this.rating.reduce((total, rating) => total + rating, 0);

        return total / this.rating.length;
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(newRating){
        if (typeof newRating === "number" && (1 <= newRating <= 5)){
            this._ratings.push(newRating);
        } else {
            console.error("Please input a NUMBER for the NEW RATING and put a NUMBER between 1 AND 5");
        }
    }
}

//export default Media;

//child class
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    //getters and setters
    get author(){
        if (typeof this._author === "string"){
            return this._author;
        } else {
            console.error("This is NOT a STRING");
        }
    }

    set author(newAuthor){
        if (typeof newAuthor === "string"){
            this._author = newAuthor;
        } else {
            console.error("Please input a STRING for NEW AUTHOR");
        }
    }

    get pages(){
        if (typeof this._pages === "number"){
            return this._pages;
        } else {
            console.error("This is NOT a NUMBER");
        }
    }

    set pages(newPage){
        if (typeof newPage === "number"){
            this._pages = newPage;
        } else {
            console.error("Please input a NUMBER for NEW PAGE")
        }
    }
}

const historyOfEverything = new Book ("Bill Bryson", "A Short History of Nearly Everything", 544);
historyOfEverything.toggleCheckOutStatus();
console.log("historyOfEverything.isCheckedOut = ", historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log("average of ratings = " , historyOfEverything.getAverageRatings());

//child class
class Movie extends Media{
    constructor(director, title, runTime, movieCast) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }

    //getters and setters
    get director(){
        if (typeof this._director === "string"){
            return this._director;
        } else {
            console.error("This is NOT a STRING");
        }
    }

    set director(newDirector){
        if (typeof newDirector === "string"){
            this._director = newDirector;
        } else {
            console.error("Please input a STRING for NEW DIRECTOR");
        }
    }

    get runTime(){
        if (typeof this._runTime === "number"){
            return this._runTime;
        } else {
            console.error("This is NOT a NUMBER");
        }
    }

    set runTime(newRunTime){
        if (typeof newRunTime === "number"){
            this._runTime = newRunTime;
        } else {
            console.error("Please input a NUMBER for the NEW RUNTIME");
        }
    }

    get movieCast(){
        if (typeof this._movieCast === "object"){
            return this._movieCast;
        } else {
            console.error("This is not an ARRAY");
        }
    }

    set movieCast(newMovieCast){
        if (typeof newMovieCast === "object"){
            this._movieCast = newMovieCast;
        } else {
            console.error("Please input an ARRAY for the NEW MOVIE CAST");
        }
    }
}

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log("speed.isCheckedOut = " , speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log("speed average rating = " , speed.getAverageRatings());

//child class
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

const christmasAlbum = new Cd("Bub", "Christmas Album 2020", ["yayz", "learning", "advent of code"]);
console.log(christmasAlbum.shuffle());