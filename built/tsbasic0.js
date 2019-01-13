function test() {
    console.log("Say Hallo!!!");
}
let str = "Some text";
let isAdmin = true;
let num = 1;
num = 0;
let stringArray = ['test', 'Text'];
let numArray = [1, 2, 3, 4, 5];
let tupple = [1, true, "Text"];
var Months;
(function (Months) {
    Months[Months["J"] = 1] = "J";
    Months[Months["F"] = 2] = "F";
    Months[Months["M"] = 3] = "M";
})(Months || (Months = {}));
const june = Months.J;
function calcPlus(x = 0, y) {
    return x + y;
}
let r = calcPlus(2, 5);
function testArgs(...args) {
    return args;
}
testArgs(1, 2, 3, 4);
function returnString(str, param) {
    if (typeof param === 'number') {
        return 100;
    }
    else if (typeof param === 'string') {
        return str + param;
    }
    else {
        return str;
    }
}
let res1 = returnString("string");
let res2 = returnString("string", "Text");
let res3 = returnString("string", 5);
// Arrow functions
const arrowTest = (x, y) => x + y;
// Описание функции
const funcCalcPlus = calcPlus;
// Функция с колбеком
function funcWithCallback(val, handler) {
    return handler(val);
}
funcWithCallback(10, (value) => value * 10);
let user = {
    name: 'Denis',
    age: 29,
    type: 'user',
    setName(str) {
        this.name = str;
    }
};
// let users: UserInterface[] = [
//     {
//         name: 'Denis',
//         age: 29,
//         type: 'user'
//     },
//     {
//         name: 'Ivan',
//         age: 29,
//         type: 'user'
//     },
// ];
function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 1; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
sumMatrix([[1, 1, 1], [2, 2, 2]]);
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
kitty.name = "Rory";
console.log(kitty);
