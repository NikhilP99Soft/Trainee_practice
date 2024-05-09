for (a = 5; a >= 0; a--) {
  //   console.log(a);
  let str = " *";
  console.log(str.repeat(a));
}

let z = 5;
for (b = 5; b >= 0; b--) {
  let str = " *";
  let space = "  ";
  console.log(space.repeat(z - b) + str.repeat(b));
}

for (let c = 0; c <= 5; c++) {
  let str = "* ";
  console.log(str.repeat(c));
}

let x = 5;
for (let d = 0; d <= 5; d++) {
  let str = " *";
  let space = "  ";
  console.log(space.repeat(x - d) + str.repeat(d));
}

let w = 5;
for (e = 0; e <= 5; e++) {
  let str = " *";
  let space = "  ";
  if (e === 1) {
    console.log(str.repeat(1));
  } else if (e === 2) {
    console.log(space.repeat(3) + str.repeat(2));
  } else if (e === 3) {
    console.log(str.repeat(3) + space.repeat(2));
  } else if (e === 4) {
    console.log(space.repeat(1) + str.repeat(4));
  } else if (e === 5) {
    console.log(str.repeat(5));
  }
}

// let n = 5;
// let string = "";

// for (let i = 0; i >= 5; i++) {
//   for (j = 0; i >= 5; i++) {
//     if (i === 0 || i === n - 1) {
//       string += "*";
//     } else {
//       if (j === 0 || i === n - 1) {
//         string += "*";
//       } else {
//         string = " ";
//       }
//     }
//   }
//   string = "\n";
// }
