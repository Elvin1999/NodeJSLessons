// const Calculator= require("./test-module-1");
// const calc1=new Calculator();
// console.log(calc1.add(2,5));
// console.log(calc1.multiply(2,5));
// console.log(calc1.divide(10,5));

// const calc2=require("./test-module-1");
// console.log(calc2.add(2,5));
// console.log(calc2.multiply(2,5));
// console.log(calc2.divide(10,5));

const { add, multiply } = require("./test-module-1");

console.log(add(10, 20));
console.log(multiply(10, 20));
