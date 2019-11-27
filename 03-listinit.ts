const getValue = () => {
    return 0
}

// A 的值是被计算出来的。注意注释部分，如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
enum List {
    A = getValue(),
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C,
    D
}
console.log(List.A) // 0
console.log(List.B) // 2
console.log(List.C) // 3
console.log(List.D) // 4
