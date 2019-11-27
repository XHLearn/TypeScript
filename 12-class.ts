class Animal {
    // name;
    constructor(public name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }

    // 存取器
    get Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    // 静态方法
    static isAnimal(a) {
        return a instanceof Animal;
    }

}
let aa = new Animal("Jack");
console.log(aa.sayHi());
aa.Name = "Love";
console.log(aa.sayHi());


// 类的继承
class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let cc = new Cat("Tom");
console.log(cc.sayHi());
console.log(Cat.isAnimal(cc));
