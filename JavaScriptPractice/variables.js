// let const var

let a = 10;
// a = 15;
// console.log(a);
// a = 20;
console.log(a);

const b = 50;
// b = 60;
console.log(b);

var c = 80;
// c = 100;
console.log(c);

{
  let a = 26; //it has the block scope
  const b = 38;
  var c = 56; //it has the global scope
}

console.log(a);
console.log(b);
console.log(c);

function abc() {
  var c = 78;
  return console.log(c); //this is functional scope
}

abc();

console.log(c);
