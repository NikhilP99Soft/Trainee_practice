// const Display = (something) => {
//   document.getElementById("demo").innerHTML = something;
// };

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(10, 10, Display);
/********************************************************************/

// function callme() {
//   document.getElementById("demo").innerHTML += "I love javaScript";
// }

// setTimeout(callme, 1000);

/****************************************************************************/

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
