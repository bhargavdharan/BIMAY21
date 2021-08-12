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

console.log(type());