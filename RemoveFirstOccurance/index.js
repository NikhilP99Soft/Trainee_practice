// let str2 = "I am the boss";
let str = "The quick brown fox jumps over the lazy dog";
function RemoveFisrtOccurance(str, occValue) {
  let str2 = str.replace(occValue, "");
  return console.log(str2);
}

// RemoveFisrtOccurance(str2, " the");
RemoveFisrtOccurance(str, "quick");
/***************************************************************************/

function Remove(str, occValue) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === occValue) {
      delete arr[i];
    }
  }
  return console.log(arr.join(" "));
}

Remove(str, "the");
/**********************************************************************************/
