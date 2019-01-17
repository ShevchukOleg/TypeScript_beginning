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
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
let current = Season.Summer;
console.log(current);
current = Season.Autumn;
// Summer
var Months;
(function (Months) {
    Months[Months["J"] = 1] = "J";
    Months[Months["F"] = 2] = "F";
    Months[Months["M"] = 3] = "M";
})(Months || (Months = {}));
const june = Months.J;
console.log(june); // 1
// Any
let someVar = "hello";
console.log(someVar); // зараз someVar - це string
someVar = 20;
console.log(someVar); // зараз someVar - це number
let someArray = [24, "Tom", false];
// Комплексні об'єкти
let person = { name: "Tom", age: 23 };
console.log(person.name);
// альтернативный вариант получения свойства
console.log(person["name"]);
// person = { name: "Alice" }; // помилка, очікується другий аргумент
// Union
let id;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id); // 234
let sum = 36.6;
if (typeof sum === "number") {
    console.log(sum / 6);
}
// Type assertion 
let someAnyValue = "hello world!";
let strLength = someAnyValue.length;
console.log(strLength); // 12
let someUnionValue = "hello work";
strLength = someUnionValue.length;
console.log(strLength); // 10
let someAnyValue1 = "hello world!";
let strLength1 = someAnyValue.length;
console.log(strLength1); // 12
let someUnionValue1 = "hello work";
strLength1 = someUnionValue1.length;
console.log(strLength1); // 10
// Functions
function calcPlus(x = 0, y) {
    return x + y;
}
let add = function (a, b) {
    return a + b;
};
let result2 = add(1, 2);
let r = calcPlus(2, 5);
function testArgs(...args) {
    return args;
}
testArgs(1, 2, 3, 4);
// Деструктуризация
let [firstone, ...rest] = [1, 2, 3, 4];
console.log(firstone); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1
let obj = {
    aa: "foo",
    bb: 12,
    cc: "bar"
};
let { aa, bb } = obj;
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// Присвоение с переназначением имен аналог let newName1 = o.a; let newName2 = o.b;
let { a: newName1, b: newName2 } = o;
let ar, ba;
({ ar, ba } = { ar: "baz", ba: 101 });
console.log(aa);
function f({ x, y } = { x: "", y: 0 }) {
    // some code
}
f(); // ok, default to {x: "", y: 0}
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
let op;
// Arrow functions
const arrowTest = (x, y) => x + y;
// Описание функции
const funcCalcPlus = calcPlus;
// Функция с колбеком
function funcWithCallback(val, handler) {
    return handler(val);
}
funcWithCallback(10, (value) => value * 10);
function mathOp(x, y, operation) {
    let result = operation(x, y);
    return result;
}
let operationFunc = function (a, b) {
    return a + b;
};
let user = {
    name: 'Denis',
    age: 29,
    type: 'user',
    setName(str) {
        this.name = str;
    }
};
let arr = [1, 2, 3, 4, 5];
let ro = arr;
class User {
    constructor(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname) {
        return this.name + " " + surname;
    }
}
let tom = new User(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));
// let tom :IUser = new User(1, "Tom", 23);
//или
// let tom :User = new User(1, "Tom", 23);
// ---------------------------------------------------------------------------------------------
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
