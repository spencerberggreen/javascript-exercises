const sumAll = function (min, max) {
    // verify both numbers are integers
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    // verify both numbers are greater than 0
    if (min < 0 || max < 0) return 'ERROR';
    // swap numbers if larger number is the first argument
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    // return the sum of every number between(and including) min & max
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
