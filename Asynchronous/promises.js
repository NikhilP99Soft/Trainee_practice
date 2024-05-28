// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object
//promise had to be settled when it eithr fullfill or rejected

let promise = new Promise((resolve, reject) => {
  let randomNum = Math.random();
  console.log(randomNum);
  if (randomNum >= 0.5) {
    resolve(randomNum);
  } else {
    reject("The number is less than 0.5");
  }
})
  .then(() => {
    console.log("the promise is successfull");
  })
  .catch((error) => {
    console.log("the num is smaller than 0.5");
  });

console.log(promise);
