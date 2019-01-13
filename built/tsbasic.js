//Task 1
function factorial(num) {
    let result = 1;
    if (num < 0) {
        return "Факториал определен только для положительных чисел!";
    }
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
factorial(0);
// Task 2
function multiply(...arr) {
    let result = arr.reduce(function (sum, item) {
        return sum + item;
    });
    return result;
}
multiply(1, 2, 3);
//Task 3
function reverseStr(str) {
    return '\u202E' + str;
}
reverseStr("Simple string");
// Исходник взт с: http://www.fileformat.info/info/unicode/char/202e/index.htm
function reverseStr2(str) {
    let newStr = '';
    for (let i = str.length - 1; i > -1; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
reverseStr2("Simple string!");
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
