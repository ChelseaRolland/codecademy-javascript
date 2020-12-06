
class Movie extends Media{
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
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
}