const removeFromArray = function (...args) {
    // pull first argument from the function (which is the array)
    const array = args[0];
    // create a new array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
        // push every element into the new array
        // UNLESS it is included in the function arguments
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    // and return that array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
