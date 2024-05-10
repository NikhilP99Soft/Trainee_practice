const array = [5, 6, 44, 3, 55, 222, 45, 43, 44];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//   do {
//     array.sort((a, b) => {
//       a - b;
//     });

//     \
//   } while (array[i] > );
//   console.log(array);
// }

let maxx = array[0];
let i = 0;

do {
  if (array[i] > maxx) {
    maxx = array[i];
  }
  i++;
} while (i <= array.length);

console.log(maxx);
