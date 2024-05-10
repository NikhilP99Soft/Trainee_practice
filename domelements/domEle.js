//selecting by dom elements
// selecting by tagname and className returns an array
// selection bt id does not return array

//element by className;
let x = document.getElementsByClassName("intro");
// console.log(x);
x[0].innerHTML = "the text in first para";

/*******************************************************************/

//element by TagName
let y = document.getElementsByTagName("h1");
// console.log(y);
y[0].innerHTML = "Good Morning";

/**********************************************************************/

let z = document.getElementById("para1");
console.log(z);
z.innerHTML = "This is para1";
document.getElementById("para2").innerHTML = "this is para 2 again";

/**************************************************************************/

// document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
