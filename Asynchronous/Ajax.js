// function LodDoc() {
//   const Xhttp = new XMLHttpRequest();
//   Xhttp.onload = function () {
//     document.getElementById("demo").innerHTML = this.responseText;
//   };
//   Xhttp.open("GET", "abc.txt");
//   Xhttp.send();
// }

let newUser = {
  name: "Nikhil",
  LastName: "Aher",
};

function LodDoc() {
  const Xhttp = new XMLHttpRequest();
  Xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  Xhttp.open("POST", "https://reqres.in/api/users");
  Xhttp.send(JSON.stringify(newUser));
}
