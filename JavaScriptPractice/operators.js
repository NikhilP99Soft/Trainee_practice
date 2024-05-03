//Arthematic operator

// the + operator
let x = 5;
let y = 2;
let z = 5 + 2;
// let z = x % y;modulus operator

document.getElementById("demo").innerHTML = z;

//subtraction(-) operator
let a = 10;
let b = 2;

let c = a - b;
document.getElementById("demo1").innerHTML = c;

//multiplication(*) operator
let l = 10;
let m = 2;
let n = l * m;
document.getElementById("demo2").innerHTML = n;

//exponentional(**) operator
let p = 10;
let q = 2;
let r = p ** q;
document.write(r);
document.getElementById("demo3").innerHTML = Math.pow(p, q);
// both exponential(**) & Math.pow() work same

//exponentional(/) operator
let d = p / q;
// document.getElementById("demo4").innerHTML = d;

//incremment
let inc = 5;
// document.getElementById("demo4").innerHTML = inc++; //postincrement
// document.getElementById("demo5").innerHTML = ++inc; //preincrement

//incremment
let sub = 8;
// document.getElementById("demo4").innerHTML = sub--; //postdecrement
// document.getElementById("demo5").innerHTML = --sub; //predecrement

//*********************************************************************************** */

///comparision operator

let valueone = 8;
let valuetwo = "8";
console.log(valueone == valuetwo); //this equal to (==) will compare the value;
console.log(valueone === valuetwo); //this equal to (===) will compare the value and datatype also it works as the strict mode;

console.log(valueone != valuetwo); //this is not equal (!=)
console.log(valueone !== valuetwo); //this is not equal to (!==) and it shows about the data type

const comparisonvalue = 10;
const secondcomparevalue = 15;
console.log(comparisonvalue > secondcomparevalue);
console.log(comparisonvalue < secondcomparevalue);

console.log(15 <= secondcomparevalue);
console.log(10 <= comparisonvalue);
//********************************************************************************** */

//Logical operators

var val1 = 6;
var val2 = 3;

//(&&) and operator
console.log(val1 < 10 && val2 > 1); //&& logical returns true if both the condition are satisfied.
console.log(val1 < 10 && val2 > 5); //it returns false if one value is not satisfied

// or (||) operator
console.log(val1 == 6 || val2 == 2); //it gives true when it satisfies any one condition
console.log(val1 == 4 || val2 == 2); //it gives false when it does not satisfies any one condition
console.log(val1 == 4 || val2 == 3);

console.log(!(val1 == 6)); //not operator it makes the true value false
console.log(!(val1 == 8)); //not operator it makes the true value false

//************************************************************************************ */

// Assignment operator

// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y
//x =  5;y =2
// console.log((x = y));
console.log((x += y));
console.log((x -= y));
console.log((x *= y));
console.log((x /= y));
console.log((x %= y));
console.log((x **= y));

//********************************************************************************** */

alert("How are you");
let name = "Nikhil";
let person = prompt("Please enter your name", "Nikhil");

document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";

// ****************************************************************************************

console.log(typeof null);
console.log(typeof "Nikhil");
console.log(typeof 3);
console.log(typeof "3");
console.log(typeof undefined);
