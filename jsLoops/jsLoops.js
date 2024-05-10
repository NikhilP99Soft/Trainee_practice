// loops

// for loop
// for/in loop
// for/of loop
// while loop
// do-while loop

// for loop

let num = "";
for (let i = 0; i < 5; i++) {
  num += "the number is" + " " + i + "<br>";
}
document.getElementById("demo").innerHTML = num;
/************************************************************/

// let arr = ["BMW", "Mercedes", "Volvo", "Porsche"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
/***********************************************************/
// var i = 5;
// for (let i = 0; i <= 10; i++) {
//   //   document.getElementById("demo1").innerHTML += i + "<br>";
//   document.write(i + "<br>");
// }
// document.write(i);
/***********************************************************/
// var i = 5;
// for (var i = 0; i < 10; i++) {
//   //   document.getElementById("demo1").innerHTML += i + "<br>";
//   //   document.write(i);
// }
// document.write(i);
/**************************************************************/

//for in loop
//with the help of for in loop we can iterate an object
//each iteration returns a key & key is used to access the value of object by object[key];
//& in array it returns the index value

const person = {
  fname: "Jhon",
  lname: "doe",
  age: 25,
};

for (let x in person) {
  //   console.log(person[x]);
  document.getElementById("demo").innerHTML += person[x] + " ";
}

/************************************************************************/

//for of loop
//behaves same to the string

const vechiles = ["UNICORN", "shine", "jupiter", "access"];
// const vechiles = "javaScript";
let text = "";
for (let x of vechiles) {
  text += x;
}
console.log(text);

/***********************************************************************/

// while loop
//it runs till the condition is satisfied
//it is entry control loop
//it executes the loop after the condition
// let text = "";
let i = 0;

while (i <= 10) {
  text += i;

  i++;
  console.log(i);
}

//do while loop
//it is exit control loop
//it executes the loop  before the condition
do {
  text += i;
  i++;
  console.log(i);
} while (i <= 15);

/********************************************************************/
//break breaks the execution while continue skip the execution
let abc = "";
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    // continue;
    break;
  }
  abc += "the number is" + " " + i + "<br>";
}

document.getElementById("demo").innerHTML = abc;
