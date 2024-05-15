let subject = "JavaScript";

//gets the length of string
let strLength = subject.length;
console.log(strLength);

//get the character at that index
let characterAtString = subject.charAt(2);
console.log(characterAtString);

//get the charactercode of that string index
let characterCode = subject.charCodeAt(2);
console.log(characterCode);

//get the character of the string using at() it allows to use th negative number but the charAt does not use negative number so you can write (-2) instead of string(string.length-2)

let characterusingat = subject.at(-2); //it will give the last 2 numbers
console.log(characterusingat);

//to upper ccase
let capital = "delhi";
let newCapital = capital.toUpperCase();
console.log(newCapital);

//to lower Case
let state = "MAHARASHTRA";
let newState = state.toLocaleLowerCase();
console.log(newState);

//slice slice removes the part of the string using it has 2 parameter start position and end position
let fruits = "Apple,Mango,Bannana,kiwi";
let fruit = fruits.slice(6, 11);
let fruit1 = fruits.slice(-12); //if we take negative value then it will count from last;
let fruit2 = fruits.slice(-6, -2); //clice with starting index and ending index
console.log(fruit2);

//subString --substring i similar to the slice only in substring negative value is taken as 0

let cities = "pune,mumbai,banglore,hydrabad";
let city = cities.substring(5, 11);
let city1 = cities.substring(-6, 11); //so it takes negative value as 0
console.log(city1);

//substr is similar to the slice only the second parameter is the length of string
let indianStates = "maharashtra,karnataka,telangana";
let state1 = indianStates.substr(12, 9);
console.log(state1);

//string concatination
let a = "abc";
let b = "def";
console.log(a.concat(b));
console.log("abc" + "def");

//trim()/trimStart()/trimend()

let name = "     Nikhil     ";
// let start = name.trimStart();
// console.log(start);
// let end = name.trimEnd();
// console.log(end);

let trimmer = name.trim();
console.log(trimmer);

//split() it splits from that part in double collan
let aplhabet = "a,b,c,d,e,f,g";
let splitFromComma = aplhabet.split(",");
console.log(splitFromComma);

let str = "nikhi suresh Aher";
console.log(str.split(" "));

//repeat();
let star = "*";
// console.log(star.repeat(4));

/**********************************************************************/

//print duplicate characters in a string

let str1 = "aaaabcddeefgg";

let str2 = str1.split("");
console.log(str2);

function abc(str2) {
  let arr = [];
  for (let i = 0; i <= str2.length; i++) {
    if (str2[i] !== str2[i + 1]) {
      arr.push(str2[i]);
    }
  }
  return console.log(arr.join(""));
}

abc(str2);

/************************************************************************************/

let sentence = "Please visit w3schools";

console.log(sentence.replace("w3schools", "microsoft"));
