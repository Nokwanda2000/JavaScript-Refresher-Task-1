//excercise 1 : numbers//+
let number = 10;
let floatingNumber = 3.16;

let total = number + 5;
let diff = number - 2;
let prod = number * 2;
let quot =number / 2;
let modulus = number % 3;
let exponentiation = number ** 2;


console.log("number:" + number);
console.log("floatingNumber:" + floatingNumber);
console.log("total:" + total);
console.log("diff:" + diff);
console.log("prod:" + prod);
console.log("quot:" + quot);
console.log("modulus:" + modulus);
console.log("exponentiation:" + exponentiation);

//excersise 2  boolean and operators//

let x = 8;
let y = 12;

let isXgreaterThanY = x > y;
let isXlessThanOrEqualToY = x<= y;
let isXEqualToY = x === y;
let isXNotEqualToY = x!== y;

//print results//

console.log("Is x greater than y?"+ isXgreaterThanY);
console.log("Is x less than or equal to y?"+ isXlessThanOrEqualToY);
console.log("Is x equal to y?" + isXEqualToY);
console.log("Is x not equal to y?" + isXNotEqualToY);


//declare variables a and b with values true or false//
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

//declare variable p and assign it a value of 10//
let p = 10;

p += 5;
console.log(p);

p -= 4
console.log(p);

p *= 6;
console.log(p);

p /= 4;
console.log(p);

p %= 2;
console.log(p);
