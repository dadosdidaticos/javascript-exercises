const fibonacci = function(j) {
    n=parseInt(j)
    if (j<0) return "OOPS"
    let fibo = [1,1];
    for (i=3; i<=n; i++){
        fibo.push(fibo[i-2]+fibo[i-3])
    };
    return fibo[n-1]
};
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
