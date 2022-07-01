const math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2){
    if(x2 === 0) {
        console.log('no se puede realizar esta operacion')
    }else{
        return x1 / x2
    }
}

/* exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide= divide; */

math.add = add;
math.substract = substract;

module.exports = math;