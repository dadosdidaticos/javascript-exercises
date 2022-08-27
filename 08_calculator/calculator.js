const add = function(i,j) {
	return i+j;
};

const subtract = function(i,j) {
	return i-j;
};

const sum = function(arr) {
	let totalSum = 0;
  for (let i of arr){
    totalSum += i ;
  };
  return totalSum;
};

const multiply = function(arr) {
  let totalMult = 1;
  for (let i of arr){
    totalMult *= i ;
  };
  return totalMult;
};

const power = function(n,x) {
	return n**x;
};

const factorial = function(x) {
  if (x===0) return 1;
  let totalMult = 1
	for (let i=x; i>0; i--){
    totalMult *= i
  };
  return totalMult
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
