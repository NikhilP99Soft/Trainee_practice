function myDetails(e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  console.log("First Nmae :", fname);
  console.log("Last Nmae :", lname);
  console.log("Email :", email);
}
