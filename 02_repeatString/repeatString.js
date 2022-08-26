const repeatString = function(string,num) {
    let repeating = ""
    if (num<0){
        return 'ERROR'
    }else{
        for (let i=0;i<num;i++) {
            repeating += string
        }
        return repeating
    }
};

// Do not edit below this line
module.exports = repeatString;
