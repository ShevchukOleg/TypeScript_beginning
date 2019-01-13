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

enum Months {
  J = 1,
  F = 2,
  M = 3
}

const june: Months = Months.J;


function calcPlus(x: number = 0, y?: number):number{
  return x + y; 
}

let r: number = calcPlus(2, 5);

function testArgs(...args: number[]): number[] {
  return args;
}

testArgs(1, 2, 3, 4);

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

// Arrow functions
const arrowTest = (x: number, y: number): number => x + y;
// Описание функции
const funcCalcPlus: (x: number, y: number) => number = calcPlus;
// Функция с колбеком
function funcWithCallback(val: number, handler: (value: number) => number) {
    return handler(val);
}

funcWithCallback(10, (value: number) => value * 10);


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