// 两种常见的定义函数的方式——
// 1.函数声明（Function Declaration）
function sum9(x, y) {
    return x + y;
}
// function sum(x: number, y: number): number {
//     return x + y;
// }
console.log(sum9(1, 2));

// 2.函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
}
// let mySum = function (x: number, y: number): number {
//     return x + y;
// };
console.log(mySum(1, 2));


// 用接口定义函数的形状
interface SearchFunc {
    (source: string, substring: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source, substring): boolean {
    return source.search(substring) !== -1;
}

// 可选参数-用 ? 表示可选的参数 可选参数必须接在必需参数后面
function buildName(firstName: string, lastName?: string): string {
    if (lastName) return firstName + " " + lastName;
    return firstName;
}
console.log(buildName("Xiao", "Hao"));

// 参数默认值-可以在必须参数前面
function getName(firstName: string = "Xiao", lastName: string): string {
    return firstName + " " + lastName;
}
console.log(getName(undefined, "Hao"));
console.log(getName("Chen", "Hao"));

// 剩余参数 ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数
// rest 参数只能是最后一个参数
function push(array: any[], ...items) {
    items.forEach(function (item) { array.push(item); })
}
let a = [];
push(a, 1, 2, 3, "4");
console.log(a);

// 重载
function reverse(x: number): number;    // 函数定义
function reverse(x: string): string;    // 函数定义
function reverse(x: number | string): number | string {
    if (typeof x === "number") return Number(x.toString().split("").reverse().join(""));
    if (typeof x === "string") return x.split("").reverse().join("");
}
console.log(reverse(12345));
console.log(reverse("12345"));
