// ДЗ 7.1. Замикання
function multiply(a) {
    let result = 0;
    return function (b) {
        result += b;
        return result;
    }
}

const sum = multiply();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));