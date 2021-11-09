const brainstormDinner = require("./async-lib1.js");
const { shopForBeans, soakTheBeans, cookTheBeans} = require("./async-lib2.js");
const cookBeanSouffle = require("./async-lib3.js");
const { steamBroccoli, cookRice, bakeChicken, cookBeans } = require("./async-lib4.js");

const withConstructor = async (num) => {
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve("zero");
        } else {
            resolve("not zero");
        }
    });
}

withConstructor(0)
    .then((resolveValue) => {
        console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
    });

const withAsync = async (num) => num === 0 ? "zero" : "not zero";
withAsync(100)
    .then((resolveValue) => {
        console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}`);
    });

const nativePromiseDinner = () => {
    brainstormDinner()
        .then((meal) => {
            console.log(`I'm going to make ${meal} for dinner.`);
        });
}

const announceDinner = async () => {
    let resolveValue = await brainstormDinner();
    console.log(`I'm going to make ${resolveValue} for dinner.`);
}

announceDinner();

//==============================================================
// Async Functions
const getBeans = async () => {
    console.log(`1. heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

//==============================================================
// Mutliple Awaits and Handling Dependent Promises
const makeBeans = async () => {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);

    console.log(dinner);
}

makeBeans();

//==============================================================
// Handling Errors
const hostDinnerParty = async () => {
    try {
        let value = await cookBeanSouffle();
        console.log(`${value} is served!`);
    } catch (error) {
        console.log(error);
        console.log(`Ordering a pizza!`);
    }
}

hostDinnerParty();

//==============================================================
// Handling Independent Promises
const serveDinner = async () => {
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();

    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();

//===============================================================
// Await Promise.all()

const serveDinnerAgain = async () => {
    let dinner = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
    let servedDinner = `Dinner is served. We're having `;
    for (const food of dinner) {
        (dinner.length - 1) === dinner.indexOf(food) ? servedDinner += `and ${food}.` : servedDinner += `${food}, `;
    }
    console.log(servedDinner);
}

serveDinnerAgain();