function abc() {
  let a = 10;
  function cde() {
    return console.log(a); // it shows a because of the closure
  }

  return cde();
}

abc();

//yu can also say this as the nested function
/******************************************************************/

// funtion can also access a variable outside the function because of the clossure

const outsidevariable = "Nikhil";

function accessvariable() {
  return outsidevariable;
}

accessvariable(accessvariable);

/*******************************************************************/

let count = 0;

function counter() {
  return (count += 1);
}

// console.log(counter());
// console.log(counter());
// console.log(counter());
counter();
counter();

console.log(count);

/********************************************************************/
