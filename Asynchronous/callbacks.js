function Display(some) {
  document.getElementById("demo").innerHTML = some;
}

// function myFirst() {
//   Display("Hello");
// }

// function mySecond() {
//   Display("Goodbye");
// }

// mySecond();
// myFirst();

/*******************************************************************************/

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
Display(result);
