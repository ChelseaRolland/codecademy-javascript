//import {Media} from "./Media";

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

