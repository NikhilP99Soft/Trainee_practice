var a = 10;

function calla() {
  //    let a = 30;//this a has the functional scope
  var nikhil = 30; //this has the functional scope
}

calla();
console.log(nikhil);

// var a = 50; //this var has the global scope so it is redeclared

// calla();
// console.log(a);
/**************************************************************************/
// var b = 35;
// const d = 150;
// {
//   let a = 100; //let and const but var does not have  the block scope
//   var b = 40;
//   const d = 200;
//   console.log(a);
//   console.log(b);
//   console.log(d);
// }

// console.log(b);
// console.log(d);
