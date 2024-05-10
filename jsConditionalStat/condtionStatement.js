//conditional Statement
// if condition
// if(consition){
//     block code is executed if condition is true
// }else{
//  else block code is executed if condition is false
// }
//////////////////////////////////////////////////////////////////////

// it extecute the block if the if condition is satisfied
let abc = 20;
if (abc == 20) {
  console.log("The value is twenty");
}
/////////////////////////////////////////////////////////////////////////////
//else
//if condition is not satisfied then the else statement is executed

if (abc == 30) {
  console.log("The value is Thirty");
} else {
  console.log("The value is not thirty");
}

// const array1 = ["Apple", "Banana", "Strawberry", "Mango"];
// for (y of array1) {
//   console.log(y);
// }
//////////////////////////////////////////////////////////////////////
// elseif condition
let timer = new Date();
let time2 = timer.getHours();
console.log(time2);
let greetings;
if (time2 < 12) {
  console.log((greetings = "Good Morning"));
} else if (time2 < 16) {
  console.log((greetings = "Good Afternoon"));
} else {
  console.log((greetings = "Good Evening"));
}
////////////////////////////////////////////////////////////////////

let score = 55;

if (score >= 90) {
  grade = "A+";
} else if (score >= 80) {
  grade = "A";
} else if (score >= 65) {
  grade = "B";
} else if (score >= 50) {
  grade = "C";
} else {
  grade = "D";
}

document.getElementById("demo").innerHTML =
  "Score:" + score + " " + "Grade :" + grade;

/////////////////////////////////////////////////////////////////////

//Switch Statement
// let Daytime = new Date();
// let day1 = Daytime.getDay();
// switch (day1) {
//   case 0:
//     console.log((day1 = "sunday"));
//     break;
//   case 1:
//     console.log((day1 = "monday"));
//     break;
//   case 2:
//     console.log((day1 = "tuesday"));
//     break;
//   case 3:
//     console.log((day1 = "wednesday"));
//     break;
//   case 4:
//     console.log((day1 = "Thursday"));
//     break;
//   case 5:
//     console.log((day1 = "Friday"));
//     break;
//   case 6:
//     console.log((day1 = "saturday"));
//     break;
// }

//////////////////////////////////////////////////////////////////
let time = new Date();
let day = time.getDay();
console.log(day);
switch (day) {
  case 0:
    day = "Sunday";
    console.log((day = "Sunday"));
    break;

  case 1:
    day = "Tuesday";
    console.log((day = "Tuesday"));
    break;

  case 2:
    day = "Tuesday";
    console.log((day = "Tuesday"));

  default:
    console.log((day = "waiting for week end"));
}

////////////////////////////////////////////////////////////////////

let x = 0;

switch (x) {
  case 0:
    text = "on";
    break;
  case 1:
    text = "off";
    break;
  default:
    text = "no value found";
    break;
}

document.write(text);

////////////////////////////////////////////////////////////////////
//batches sunday - monday = 7am - 12pm;

let c = "sunday";

switch (c) {
  case "monday":
    console.log("batch is at 8am");
    break;
  case "tuesday":
    console.log("batch is at 9am");
    break;
  case "wednesday":
    console.log("batch is at 10am");
    break;
  case "thursday":
    console.log("batch is at 11am");
    break;
  case "Friday":
    console.log("batch is at 12pm");
    break;
  case "sunday":
    console.log("batch is at 7am");
    break;
  case "saturday":
    console.log("batch is at 1pm");
    break;
  default:
    console.log("Today is holiday");
}

/////////////////////////////////////////////////////////////////////////
