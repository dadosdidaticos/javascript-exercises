const removeFromArray = function(myArray,myValues) {
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
forbidCharact = [' ','.','!',',','?',';']
const palindromes = function (text) {
    textArray = text.toLowerCase().split('');
    cleanTextArray = removeFromArray(textArray,forbidCharact);
    let textArraySize = cleanTextArray.length
    if (textArraySize%2===0){
        for (i=0;i<=((textArraySize/2)-1);i++){
            if (cleanTextArray.at(i) !== cleanTextArray.at(-i-1)) return false;
        }return true;
    };
    if (cleanTextArray.length%2!==0){
        for (i=0;i<=(textArraySize/2)-1.5;i++){
            if (cleanTextArray.at(i) !== cleanTextArray.at(-i-1)) return false;
        }return true;
    };
    return false
};
//console.log(palindromes('eteset'))
// Do not edit below this line
module.exports = palindromes;
