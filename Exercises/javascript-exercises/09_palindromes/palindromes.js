const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replaceAll(' ', "")
    str = str.replaceAll('!', "")
    str = str.replaceAll(',', "")
    str = str.replaceAll('.', "")
    arr = str.split("")
    return arr.reverse().join("") === str
};

// Do not edit below this line
module.exports = palindromes;
