var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Our 1st Array is ==> ", arr);
console.log("Our 2nd Array is ==> ", arr1);

// we product of all elements in given array

// var product1 = 1;
// var product2 = 2;

// arr.forEach((num) => {
//     product1 = product1 * num;
//     product2 = product2 * num;
// })
// console.log(product1) // 3628800
// console.log(product2) // 7357600

// function multiplyArr(arr, arr1) {
//     return arr * arr1;
// }
// var mulArr = arr1.map(multiplyArr)
// console.log(mulArr)

function findProd(a, b) {
    console.log(`${a} X ${b}`);
    return a * b;
}
var prod = arr.map(findProd);
console.log("map the array ==> ", prod)

var prod1 = arr.reduce(findProd);
console.log("reduce ==> ", prod1)
console.log("=================")
// convert our array as square of each element

// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * arr[i];
// }
// console.log("Squaring with for loop ===>", arr);

function sqr(num) {
    return num * num;
}
console.log("Squaring with map method ===>", arr.map(sqr));
console.log("=================");

arr.forEach((num) => {
    if (num % 2 == 0) {
        console.log(num)
    }
})

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// console.log("array forEach method ==> ",arr.forEach(isEven)) // undefined
console.log("array map method ==> ",arr.map(isEven))
console.log("array reduce method ==> ",arr.reduce(isEven))
console.log("array filter method ==> ",arr.filter(isEven))
