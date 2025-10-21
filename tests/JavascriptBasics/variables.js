const pi = 3.14;
let radius = 15;
let areaOfCircle = pi*radius*radius;
console.log(areaOfCircle);

var a = 27;
var b = 35;
function sum(){
    console.log(a*b);
}
sum();


// Odd or even 
let m = 3456;

if (m%2 === 0){
    console.log("It is a even number");
}
else {
    console.log("It is a odd number");
}

//identify value before decimal and after decimal is even or odd
let number = 234.67529;

let numbersSplit = number.toString().split('.');
let beforeDecimal = parseInt(numbersSplit[0]);
let afterDecimal = parseInt(numbersSplit[1]);

if(beforeDecimal%2 === 0){
    console.log(`Before decimal (${beforeDecimal}) is even`);
}else {
    console.log(`Before decimal (${beforeDecimal}) is odd`);
  }

  if(afterDecimal%2 === 0){
    console.log(`After decimal (${afterDecimal}) is even`);
}else {
    console.log(`After decimal (${afterDecimal}) is odd`);
  }

  