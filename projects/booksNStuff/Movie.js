
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