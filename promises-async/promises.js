const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve("Sunglasses order processed.");
    } else {
        reject("That item is sold out.");
    }
}

const orderSunglasses = () => new Promise(myExecutor);

const orderPromise = orderSunglasses();

console.log(orderPromise);

//======================================================================
console.log("This is the 1st line of code in app.js");

const usingSTO = () => {
    console.log("Let's test this out.")
}

setTimeout(usingSTO, 3000);

console.log("This is the last line of the code in app.js.")

//======================================================================

const { checkInventory } = require('./library.js');
const order = [["sunglasses", 1], ["bags", 2]];

const handleSuccess = (resolvedValue) => console.log(resolvedValue);
const handleFailure = (rejecedValue) => console.log(rejecedValue);

checkInventory(order).then(handleSuccess, handleFailure);