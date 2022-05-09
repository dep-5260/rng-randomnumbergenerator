function generateRandomNumber() {
    return Math.floor(Math.random() * 1000);
}
function generateRandomNumberLimit(min, max) {
    if(!min) {
        throw new Error("min is not defined")
    }
    if(!max) {
        throw new Error('max is not defined')
    }
    if(isNaN(min)) {
        throw new Error('min is not a number')
    }
    if(isNaN(max)) {
        throw new Error('max is not a number')
    }
    if(min >= max) {
        throw new Error('min was bigger than max')
    }
    return Math.floor(Math.random() * (max - min) + min);
}
function randomFromArray(array) {
    if(!array) {
        throw new Error('The array wasn\'t specified yet')
    }
    if(!Array.isArray(array)) {
        throw new Error("array variable was not actually an array. Please check if you input it correctly");
    }
    return array[Math.floor(Math.random() * array.length)]
}
module.exports = {
    generateRandomNumber,
    generateRandomNumberLimit,
    randomFromArray
}