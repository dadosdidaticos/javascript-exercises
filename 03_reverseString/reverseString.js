const reverseString = function(text='') {
    textArray = text.split("");
    let reversed = ""
    let index = textArray.length-1
    while (index>=0){
        reversed+=textArray[index]
        index--
    }
    return reversed
};


console.log(reverseString(('hello')))
// Do not edit below this line
module.exports = reverseString;
