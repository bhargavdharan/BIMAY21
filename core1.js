// var let const
// block scope,function scope, global scope

// var a = 20;
// console.log("Outside function: ", a);
// function inside(b) {
//     var b = 30;
//     console.log("Inside function: ", b);
//     console.log(a);
// }
// // here b is functional scope
// inside();
// // console.log(b);
// console.log("================");

// function greet(name) {
//     name = name + " OK ";
//     console.log(name);
//     console.log("hello", name);
//     console.log(arguments);
// }

// var a = ["Dharan"]
// console.log(a);
// console.log();

// greet();
// console.log();

// greet("Dharan");
// console.log();

// greet("dharan", 123, "abc", true, [1, 2, 3, 4]);

// console.log("================");

// console.log(arguments); // to observe or track our file

//folder - repository - directory
// IIFE - (Immediate Invoked function expression)
// (function (exports, require, module, __filepath, __dirname) {
//     console.log(arguments);
//     return exports;
// }
//     ());

exports.name = "Dharan";
module.exports.age = 21;

// console.log(arguments[0]); // {name: 'Dharan'}

console.log("Hey...I am in core1");
// console.log(arguments);

exports.printName = function myName() {
  console.log("Dharan!");
};

exports.printAge = function myAge() {
  console.log("My age is", 21);
};

//---bad way to export function----
// exports = () => {
//     console.log("Hello Everyone!")
// }
// module.exports = { hi: () => { console.log("Hello!") } }


module.exports = {
    one : () => {
        console.log("One - 1!")
    },
    two : () => {
        console.log("Two - 2!")
    }
}

module.exports = function () {
    console.log("Hello! Man...")
}