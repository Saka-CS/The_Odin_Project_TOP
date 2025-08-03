const fibonacci = function(num) {
    if (num == 0){
        return 0;
    }
    else if (num < 0){
        return "OOPS"
    }
    answer = [1, 1]
    for(i = 2; i < num; i++){
        answer.push(answer[i - 1] + answer[i - 2]);
    }
    return answer[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
