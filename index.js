// // ДЗ 7.1. Замикання
// function multiply(a) {
//     let result = 0;
//     return function (b) {
//         result += b;
//         return result;
//     }
// }

// const sum = multiply();

// console.log(sum(4));
// console.log(sum(6));
// console.log(sum(10));
// console.log(sum(7));

// ДЗ 7.2. Добуток через карування
// function multiplyCurry(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// console.log(multiplyCurry(5)(2));

// ДЗ 7.3. Функція з циклом
function inputValue() {
    let result;
    for (let i = 1; i <= 10; i++) {
        let num = prompt('Введіть число більше 100');

        if (isNaN(num) || num > 100 || i === 10) {
            result = num;
            break;
        } else if (num < 100) {
            result = num;
            continue;
        }
    }
    console.log(result);
}

inputValue();