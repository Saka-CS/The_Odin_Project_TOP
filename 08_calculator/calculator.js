const add = function() {
	return arguments[0] + arguments[1]
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

const sum = function(arr) {
  summation = 0;
	arr.forEach(x => {
    summation += x;
  });
  return summation;
};

const multiply = function(arr) {
  summation = 1;
	arr.forEach(x => {
    summation *= x;
  });
  return summation;
};

const power = function() {
	return arguments[0] ** arguments[1]
};

const factorial = function(num) {
	answer = 1
  for (i = 1; i <= num; i++){
    answer *= i;
  }
  return answer;
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
