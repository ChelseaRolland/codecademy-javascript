"use strict";

const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers () {
            if (typeof this._appetizers === "object"){
                return this._appetizers;
            }
        },

        set appetizers(newAppetizer){
            if (typeof this._appetizers === "object"){
                return this._appetizers = newAppetizer;
            }
        },

        get mains(){
            if (typeof this._mains === "object"){
                return this._mains;
            }
        },

        set mains(newMainMeal){
          if (typeof this._mains === "object"){
              return this._mains = newMainMeal;
          }
        },

        get desserts(){
            if (typeof this._desserts === "object"){
                return this._desserts;
            }
        },

        set desserts(newDessert) {
            if (typeof this._desserts === "object"){
                return this._desserts = newDessert;
            }
        }
    },

    get courses(){
        //if (typeof this._courses === "object") {
            return {
                //Below utilizes the getter methods for the appetizers, main, and desserts
                appetizers: this.appetizers,
                mains: this.mains,
                desserts: this.desserts
            }
        //}
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }

        // if (courseName === "appetizers"){
        //     this.courses.appetizers.push(dish);
        // }
        //
        // if (courseName === "mains"){
        //     this.courses.mains.push(dish);
        // }
        //
        // if (courseName === "desserts"){
        //     this.courses.desserts.push(dish);
        // }

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse: function (courseName){
        //Retrieve array of given courses dishes form the menu's courses object
        const dishes = this._courses[courseName];
        //Generate a random index with the dishes length
        const randomIndex = Math.floor(Math.random() * dishes.length);
        //Return a dish from dishes using the random index
        return dishes[randomIndex];
    },

    generateRandomMeal: function (){
        //Generating an automatic 3 meal course
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");

        const totalPrice = (appetizer.price + main.price + dessert.price).toFixed(2);

        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price for this 3-course meal is $${totalPrice}.`
    }
};

//3 Course Meal Inserts
menu.addDishToCourse("appetizers", "Spinach Dip", 9.78);
menu.addDishToCourse("mains", "Spinach Alfredo Eggplant Pizza", 15.43);
menu.addDishToCourse("desserts", "Chocolate Mousse Cake", 13.89);

menu.addDishToCourse("appetizers", "Queso", 7.33);
menu.addDishToCourse("mains", "Quinoa, Forbidden Rice Vegan Bowl", 17.78);
menu.addDishToCourse("desserts", "Dream Bars", 11.11);


//Testing the Random Course Meal Generator
let meal = menu.generateRandomMeal();
console.log(meal);
