const findTheOldest = function(people) {

    return people.reduce(findOld);
    

    function findOld(previous, current){
        if(!previous){
            return current;
        }

        currentDeath = current.yearOfDeath || new Date().getFullYear();
        previousDeath = previous.yearOfDeath || new Date().getFullYear();
        
        if(currentDeath - current.yearOfBirth > previousDeath - previous.yearOfBirth){
            return current;
        }
        else{
            return previous
        }
    }


};



// Do not edit below this line
module.exports = findTheOldest;
