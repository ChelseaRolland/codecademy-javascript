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