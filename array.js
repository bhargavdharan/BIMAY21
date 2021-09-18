// var student = ["Hope", "Landon", "Josie", "Elizabeth", "Rafael", "MJ",12354,true,false,undefined];

var student = ["Hope", "Landon", "Josie", "Elizabeth", "Rafael", "MJ"];
console.log(student);
student.forEach((element) => {
    console.log(`ForEach ==> at ${student.indexOf(element)} is -- ${element}`);
})
console.log("============");

var student1 = [];
student1[0] = "abc";
student1[1] = "mnc";
console.log("total elements:", student1.length);
console.log(student1);
// student1[4] = "xyz";
student1[student1.length - 1] = "avcbf";
student1[student1.length - 2] = "acbjbf";
console.log(student1);
student1.push("ABC");
console.log("total elements:", student1.length);
console.log(student1);
console.log("============");

var Student2 = [];
Student2.length = 3;
Student2[0] = 12;
Student2[1] = 22;
Student2[2] = 32;
Student2[3] = 42;
Student2[4] = 52;
Student2.push(1);
Student2.push(11);
Student2.push(21);
Student2.push(31);
Student2.push(41);
console.log(Student2);
console.log("===============");

for (let i = 0; i < Student2.length; i++) {
  console.log(Student2[i]);
}
// for loop and foreach are same

Student2.forEach((element) => {
    if (element < 22) {
        console.log("forEach==>",element);
    }
})


console.log("===============");
