"use strict";

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
    getAverageRatings(ratingsArr){
        let total = 0;
        for (let i = 0; i < ratingsArr.length; i++){
            total += ratingsArr[i];
        }

        return total / ratingsArr.length;
    }

    toggleCheckOutStatus(){
        return !this._isCheckedOut;
    }

    addRating(newRating){
        this._ratings.push(newRating);
    }
}