function reverseString(str) {
    // split string into an array
    let splitString = str.split('');
    // reverse the array
    let reverseArray = splitString.reverse('');
    // concatenate the array
    let joinArray = reverseArray.join('');
    // return the reversed string
    return joinArray;
}

// Do not edit below this line
module.exports = reverseString;
