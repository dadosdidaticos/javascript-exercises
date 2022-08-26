const removeFromArray = function(myArray,...myValues) {
    let value
    for (value of myValues){
        for (item of myArray){
            if (value===item){
                myArray.splice(myArray.indexOf(item),1)
            }
        }

    }
    return myArray
};
console.log(removeFromArray([1,2,3],3))
// Do not edit below this line
module.exports = removeFromArray;

