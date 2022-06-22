const repeatString = function (string, num) {
    if (num < 0 || num === '') {
        // if num is negative or is left blank
        return 'ERROR';
    } else if (string === '') {
        // if string is left blank
        return '';
    } else {
        return string.repeat(num);
        // returns string * num
    }
};

// Do not edit below this line
module.exports = repeatString;
