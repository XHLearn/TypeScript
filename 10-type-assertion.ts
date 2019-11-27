// 类型断言
// 1. <类型>值
// 2. 值 as 类型
function getLength(something: string | number): number {
    if ((<string>something).length) return (<string>something).length;
    return something.toString().length;
}
console.log(getLength(123))
console.log(getLength("123"))

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// function toBoolean(something: string | number): boolean {
//     return <boolean>something;
// }

function toNumber(something: string | number): number {
    return <number>something;
}
console.log(typeof toNumber(1234))
console.log(typeof toNumber("1235"))
