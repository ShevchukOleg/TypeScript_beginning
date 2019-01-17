function test (){
  console.log("Say Hallo!!!");
}

let str: string = "Some text";

let isAdmin: boolean = true;

let num: number = 1;

num = 0;

let stringArray: string[] = ['test', 'Text'];

let numArray: Array<number> = [1, 2, 3, 4, 5];

let tupple: [number, boolean, string] = [1, true, "Text"];

	
enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
console.log(current);
current = Season.Autumn;
 // Summer


enum Months {
  J = 1,
  F = 2,
  M = 3
}

const june: Months = Months.J;
console.log(june); // 1

// Any
let someVar: any = "hello";
console.log(someVar);   // зараз someVar - це string
someVar = 20; 
console.log(someVar);   // зараз someVar - це number

let someArray: any[] = [ 24, "Tom", false];

// Комплексні об'єкти
let person = {name:"Tom", age:23};
console.log(person.name);
// альтернативный вариант получения свойства
console.log(person["name"]);
// person = { name: "Alice" }; // помилка, очікується другий аргумент

// Union
let id : number | string;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id);  // 234

type stringOrNumberType = number | string;
let sum: stringOrNumberType = 36.6;
if (typeof sum === "number") {
    console.log(sum / 6);
}

// Type assertion 
let someAnyValue: any = "hello world!";
let strLength: number = (<string>someAnyValue).length;
console.log(strLength); // 12
 
let someUnionValue: string | number = "hello work";
strLength = (<string>someUnionValue).length;
console.log(strLength); // 10

let someAnyValue1: any = "hello world!";
let strLength1: number = (someAnyValue as string).length;
console.log(strLength1); // 12
 
let someUnionValue1: string | number = "hello work";
strLength1 = (someUnionValue1 as string).length;
console.log(strLength1); // 10


// Functions
function calcPlus(x: number = 0, y?: number):number{
  return x + y; 
}

let add = function (a: number, b: number) : number {
    return a + b;
}
let result2: number = add(1, 2);

let r: number = calcPlus(2, 5);

function testArgs(...args: number[]): number[] {
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
}
let { aa, bb }:{aa: string, bb: number} = obj;

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// Присвоение с переназначением имен аналог let newName1 = o.a; let newName2 = o.b;
let {a: newName1, b: newName2}: {a: string, b: number} = o;

let ar: string, ba: number;
({ar, ba} = {ar: "baz", ba: 101});
console.log(aa);

// Деструктуризація з присвоєнням типу обов'язково тип перерд значенням по замовчуванню
type C = {x: string, y?: number}
function f({x, y}: C = {x: "", y: 0}): void {
    // some code
}
f(); // ok, default to {x: "", y: 0}



// Overloading
function returnString(str: string): string;
function returnString(str: string, oneMoreStr: string): string;
function returnString(str: string, num: number): number;

function returnString(str: string, param?: string | number): string | number {
    if (typeof param === 'number') {
        return 100;
    } else if (typeof param === 'string') {
        return str + param;
    } else {
        return str;
    }
} 

let res1 = returnString("string");
let res2 = returnString("string" , "Text");
let res3 = returnString("string", 5);

let op: (x:number, y:number) => number;
// Arrow functions
const arrowTest = (x: number, y: number): number => x + y;

// Описание функции
const funcCalcPlus: (x: number, y: number) => number = calcPlus;
// Функция с колбеком
function funcWithCallback(val: number, handler: (value: number) => number) {
    return handler(val);
}

funcWithCallback(10, (value: number) => value * 10);


function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    let result = operation(x, y);
    return result;
}
let operationFunc: (x: number, y: number) => number = function (a: number, b: number): number {
    return a + b;
}

// Интерфейсы
interface UserInterface {
  name: string;
  age: number;
  readonly type: string;
  bithday?: Date;//необъязательный параметр
  setName(str: string): void;
}

let user: UserInterface = {
  name: 'Denis',
  age: 29,
  type: 'user',
  setName(str: string): void {
      this.name = str;
  }
};

let arr: number[] = [1, 2, 3, 4, 5];
let ro:ReadonlyArray<number> = arr;
// arr /= ro
// arr = ro as number

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

interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
 
class User implements IUser{
 
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
 
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
 
        return this.name + " " + surname;
    }
}
 
let tom = new User(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));

// let tom :IUser = new User(1, "Tom", 23);
//или
// let tom :User = new User(1, "Tom", 23);

// ---------------------------------------------------------------------------------------------
function sumMatrix(matrix: number[][]) {
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

const numLivesForCat: number = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat
}

kitty.name = "Rory";

console.log(kitty)


