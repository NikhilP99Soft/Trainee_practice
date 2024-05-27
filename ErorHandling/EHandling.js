//first method to handle the error;
console.log("a");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log("response", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Catch Err", err);
  });
console.log("b");
/***************************************************************************/
//error handling using try catch method

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("response", response);
    const data = await response.json();
    console.log(data);
  } catch {
    (err) => {
      console.error(err);
    };
  }
}

fetchData();
console.log("c");

console.log("d");
/**************************************************************************************/
//check the status of API
//we can be shown  this only when the error is in the backend side in api

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log("resonse", response);
//     if (!response.ok) {
//       throw new Error("throw Error", response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("catch Err:", error);
//   });
