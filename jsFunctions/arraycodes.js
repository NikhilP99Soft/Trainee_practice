const array = [
  1, 2, 3, 5, 7, 9, 10, 11, 12, 15, 19, 20, 21, 22, 25, 27, 29, 30,
];

// console.log(array.indexOf(3));
// console.log(...array);

function missingNum(arr) {
  //   console.log(arr);
  let missingArray = [];

  let minNum = Math.min(...arr); //1
  let maxNum = Math.max(...arr); //30

  for (let i = minNum; i < maxNum; i++) {
    // console.log(arr.indexOf(i), i);

    if (arr.indexOf(i) < 0) {
      missingArray.push(i);
    }
  }
  return missingArray;
}

console.log(missingNum(array));
