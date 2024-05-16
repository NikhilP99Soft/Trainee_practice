let input = [4, 5, 6, 6, 7, 8, 4, 9];
let arr = input.sort((a, b) => {
  return a - b;
});

//[4,4,5,6,6,7,8,9]
function removeDuplicates(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      output.push(arr[i]);
    }
  }
  return console.log(output);
}

removeDuplicates(input);

/*************************************************************************/
