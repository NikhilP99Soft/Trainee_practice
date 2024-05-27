// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :

// Test 1:
array1 = [1, 0, 2, 3, 4, 10, 14, 24, 98];
array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// Test 2:
// array1 = [1,0,2,-3,-4];
// array2 = [3,5,6,7,-8];
// Expected Output :
// [4, 5, 8, 4,-12]

// const array1 = [1, 0, 2, -3, -4];
// const array2 = [3, 5, 6, 7, -8];

function outputOfArray(array1, array2) {
  let output = [];
  let maxLength = Math.max(array1.length, array2.length);
  console.log(maxLength);
  if (array1.length < maxLength) {
    array1.push(0);
  } else if (array2.length < maxLength) {
    array2.push(0);
  }

  for (let i = 0; i < array1.length; i++) {
    // console.log(array1[i]);
    for (let j = 0; j < array2.length; j++) {
      // console.log(array1[i], array2[j]);
      if (i === j) {
        output.push(array1[i] + array2[j]);
      }
    }
  }

  return console.log(output);
}

outputOfArray(array1, array2);

/*******************************************************************************/

// const aray1 = [1, 0, 2, 3, 4];
// const aray2 = [3, 5, 6, 7, 8, 13];
// function samast(aray1, aray2) {
//   let box = [];
//   // let valueof2 =[]
//   for (i = 0; i <= aray1.length; i++) {
//     let val1 = i < aray1.length ? aray1[i] : 0;
//     let val2 = i < aray2.length ? aray2[i] : 0;
//     console.log(i);
//     let sumed = val1 + val2;
//     // box.push();
//     box.push(sumed);
//     // console.log(val1);
//   }
//   return console.log(box);
// }
// samast(aray1, aray2);
