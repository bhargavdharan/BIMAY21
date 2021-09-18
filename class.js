var student = {
    //key:value --> value can be any data type value
    name: "dharan",
    Address: "facebook",
    RollNo: 101,
    isGraduated: true,
    details: function () {
        console.log(this.name)
        console.log(this.Address)
        console.log(this.RollNo)
        console.log(this.isGraduated)
    },
    marks: {
        examType: "10th",
        English: 89,
        Maths: 99,
        //ToDo: discuss arrow functions vs function keyword
        details: function(){
            console.log(this.examType)
            console.log(this.English)
            console.log(this.Maths)
        }
    }
}

console.log("Printing Candidate details...")
student.details();
console.log("Printing Marks details...")
student.marks.details();

student.fullName = "bhargav dharan"
student.age = 21
console.log(student.fullName)
console.log(student.age)

student.details();

console.log("=======================================")

class Student{
    constructor(name, address, rollNo, isGraduate) {
        this.name = name;
        this.address = address;
        this.rollNo = rollNo;
        this.isGraduate = isGraduate;
    }
    details() {
        console.log(this.name)
        console.log(this.address)
        console.log(this.rollNo)
        console.log(this.isGraduate)
    }
    getName(lastName) {
        return this.name+ " " +lastName
    }
}

console.log("")
var Student1 = new Student("Mark","usa",103,true);
Student1.details();
console.log(Student1.getName("wood"));

console.log("")
var Student2 = new Student("Clark","uk",109,true);
Student2.details();
console.log(Student2.getName("michael"));
