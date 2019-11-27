// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let myNumber: string | number;
myNumber = "seven";
myNumber = 7;
// mynumber = true;

// function getLength(something: string | number): number {
//     // 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候
//     // 我们只能访问此联合类型的所有类型里共有的属性或方法：
//     return something.length;
// }

function getString(something: string | number): string {
    return something.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myNumber1: string | number;
myNumber1 = "seven";
console.log(myNumber1.length);
myNumber1 = 7;
// console.log(myNumber1.length);
