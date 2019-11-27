// 布尔
let isDone: boolean = false;
// let createByNewBoolean: boolean = new Boolean();
let createByNewBoolean: Boolean = new Boolean();
let createByBoolean: boolean = Boolean(1);


// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o1234567;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = "Tom";
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`
console.log(sentence);


// 空值

// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName(name: string): void {
    console.warn(`My Name is ${name}`);
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined;
alertName("alertName");

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let u: undefined = undefined;
let n: null = null;
let v: void = undefined;
let num1: number = undefined;
let num2: number = u;
// let num3: number = v;
let num4: number = n;
