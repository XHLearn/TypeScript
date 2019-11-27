// Array<any> === any[]
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray(3, 'x'));

// 数组泛型来定义返回值的类型
function createTArray<T>(length: number, value: T): T[] {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
}
let result: string[] = createTArray<string>(3, "A");
let result2 = createTArray(3, "A");
console.log(result, typeof result);


// 多个类型参数泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
console.log(swap(["1", 2]));

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法

// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T) {
    console.log(arg.length);
}
// loggingIdentity(11); // error
class CLengthwise implements Lengthwise {
    length: number;
}
let t = new CLengthwise();
loggingIdentity(t);


// 多个类型参数之间也可以互相约束：
function copyFields<T extends U, U>(target: T, source: U): T {
    // 其中要求 T 继承 U
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
let y = copyFields(x, { b: 10, d: 20 });
console.log(y, typeof y);