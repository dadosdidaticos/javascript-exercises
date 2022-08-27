const sumFunction = function(minInteger,maxInteger) {
    let sum = 0
    for (let i=minInteger; i<=maxInteger; i++){
        sum+=i
    }
    return sum
};

const sumAll = function(firstInteger,secondInteger) {
    if (firstInteger<0 || secondInteger<0 || typeof firstInteger !=='number' || typeof secondInteger !=='number') {
        return 'ERROR'
    } else if (firstInteger>=secondInteger){
        return sumFunction(secondInteger,firstInteger)
    } else {
        return sumFunction(firstInteger,secondInteger)
    }
}

// Do not edit below this line
module.exports = sumAll;
