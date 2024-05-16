// let input = [4, 5, 6, 6, 7, 8, 4, 9];
// let arr = input.sort((a, b) => {
//   // console.log(a, b);
//   return a - b;
// });

// console.log(arr);

// //[4,4,5,6,6,7,8,9]
// function removeDuplicates(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       output.push(arr[i]);
//     }
//   }
//   return console.log(output);
// }

// // removeDuplicates(arr);
// removeDuplicates(input);

// /*************************************************************************/
// // Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.
// let arr2 = ["apple", "banana", 55, 77, 98];
// function FindIndex(arr, i) {
//   indexValue = arr.indexOf(i);
//   return console.log(indexValue);
// }

// // FindIndex(input, 5);
// FindIndex(arr2, "apple");

// function indexofthenumber(arr, y) {
//   for (let x of arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == x && y) {
//         console.log(1);
//       } else {
//         console.log(-1);
//       }
//     }
//     // console.log(x);
//   }
// }

// indexofthenumber(arr2);

/************************************************************************************/

function unique_elements(arr) {
  const result = [];
  for (const i of arr) {
    let counter = true;
    for (const j of result) {
      if (i == j) {
        debugger;
        // console.log(i, j);
        counter = false;
        break;
      }
    }
    if (counter) {
      console.log(2);
      debugger;
      result.push(i);
    }
  }
  return result;
}
//document.getElementById("result").innerHTML = "Unique Array Elements Are:" + unique_elements([2,2,4,8,2,2,2]);
console.log(unique_elements([2, 2, 4, 8, 2, 2, 2]));
