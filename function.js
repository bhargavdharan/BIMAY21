// 0 , " ", null and undefined will be treated as false
// rest is true
var t = 10;
if("qqr"){
    console.log("Hello");
}else if(true){
    console.log("World!");
}else{
    console.log("2021");
}

//---------------------------------

if("qqr3"){
    console.log("Hello");
    if(11){
        console.log("covid");
    }
}else if(true){
    console.log("world!");
}else{
    console.log("2021");
}

//-----------------------
if(undefined){
    console.log("Hello");
    // Name();
    if(true){
        console.log("Covid");
    }
}else if(true){
    // Name();
    console.log("world!")
}else{
    // Name();
    console.log("2021");
}

//--------------------------

function Name(){
    // age();
    var Name = "Dharan";
    console.log(Name);
    var Name1 = function(){
        return "bhargav";
    }
    console.log(Name1);
    console.log(Name1());
    if(age()){

    }else if(type() ){
        console.log("Hi!");
    }
}
Name();

//------------------------

function age(){
    var age = 21;
    console.log(age);
}
age();

//------------------------

function type(){
    console.log("hello");
    return 10;
}
type();

console.log(type);

function hello(Name){
    console.log("In Hello function");
    return " Hello " +Name;

}

function greet(hello, Name){
    var a = hello(Name);
    console.log(a);
    console.log("Hi!");

}
greet(function(Name){
    console.log("Out Hello function");
    return " Hello " +Name},"User");

greet(hello,"Dharan");

console.log("--------------------------------------");
//--------Arrow Functions---------------
console.log("--------------------------------------");

var helloHi = ((Name1)=>{
    console.log("InArrow Hello Function");
    return " Hello " +Name1;
})

var greet1 = ((helloHi, Name1) => {
    var a1 = helloHi(Name1);
    console.log(a1);
    console.log('Bonjour!');
})

greet1((Name1)=>{
    console.log("Arrow out Hello Function")
    return " Hello " +Name1

},"Bhargav")

greet1(helloHi,"Dharan");