import * as path from 'path';

let filepath: string = "/a/b/c.txt";
console.log(path.dirname(filepath));
console.log(path.basename(filepath, ".txt"));
console.log(path.extname(filepath));