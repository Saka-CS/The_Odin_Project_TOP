const sumAll = function(start, end) {
    
    if(start < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }

    sum = 0
    if(start > end){
        temp = start
        start = end
        end = temp
    }

    for(i = start; i <= end; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
