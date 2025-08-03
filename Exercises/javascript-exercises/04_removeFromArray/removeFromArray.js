const removeFromArray = function(array, ...rest) {
    index = 0
    while (index < rest.length){
        argumentLocation = array.indexOf(rest[index])
        if (argumentLocation  != -1){
            array.splice(argumentLocation, 1)
        }
        else{
            index += 1
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
