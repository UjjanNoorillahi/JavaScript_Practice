let score = 100;


console.log(typeof score);


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


// ************************ Operations ************************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// Primitive and Non-Primitive Data Types

// Primitive Data Types
// Number, String, Boolean, null, undefined, Symbol, BigInt

//example of primitive data types

let num = 100;
let str = "hello";
let bool = true;
let Null = null;
let undefined = undefined;
let symbol = Symbol("123");
let bigint = BigInt(123);



// Non-Primitive Data Types
// Array, Objects, Functions    

//example of non-primitive data types

let arr = [1,2,3,4,5];
let obj = {name: "John", age: 20};
let func = function(){
    console.log("Hello");
}

