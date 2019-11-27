// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的
enum Days { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat };
// 递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了。

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true
