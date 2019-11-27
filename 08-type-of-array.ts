// 「类型 + 方括号」表示
let fibonacci: number[] = [1, 1, 2, 3, 5, 8];
fibonacci.push(13)
console.log(fibonacci);

// 数组泛型
let anys_number: Array<number> = [1, 1, 2, 3];
console.log(anys_number);

// 用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibInter: NumberArray = [1, 1, 2, 3]
console.log(fibInter);


// 类数组
// function sum() {
//     let args: number[] = arguments;
// }

// 除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// // IArguments 是 TypeScript 中定义好了的类型，它实际上就是
// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }

function sum2() {
    let args: IArguments = arguments;
}

// any 表示数组中允许出现任意类型
let any_list: any[] = ["xh", 25, { "site": "www.baidu.com" }];
console.log(any_list);
