interface Person {
    name: string;
    age: number;
}

let tom: Person = { name: "Tom", age: 12 };
// 定义的变量比接口少了一些属性是不允许的
// let tom2: Person = { name: "Tom2" };
// 多一些属性也是不允许的
// let tom3: Person = { name: "Tom3", age: 12, gender: "female" };


// 可选属性
interface Person2 {
    name: string;
    age?: number;
}
let tom21: Person2 = { name: "Tom21" };
let tom22: Person2 = { name: "Tom22", age: 12 };
// let tom23: Person2 = { name: "Tom23", age: 12, gender: "female" };


// 任意属性-一个接口允许有任意的属性
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom31: Person3 = { name: "Tom21" };
let tom32: Person3 = { name: "Tom22", age: 12 };
let tom33: Person3 = { name: "Tom23", age: 12, gender: "female" };


// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person4 {
    name: string;
    // age?: number;
    [propName: string]: string;
}


// 只读属性
interface Person5 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom5: Person5 = { id: 12345, name: "Tom22", age: 12 };
// tom5.id = 54321;
