// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
let myLoveNumber: string = "seven";
// myLoveNumber = 7;

// any 类型，则允许被赋值为任意类型。
let myAnyNumber: any = "seven";
myAnyNumber = 7;

// 在任意值上访问任何属性都是允许的：
let anyThing: any = "any";
console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
// anyThing.setName("Jerry");
// anyThing.setName("Jerry").sayHello();
// anyThing.myName.setFirshName("Cat");

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let something;
