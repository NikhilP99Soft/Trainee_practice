//function declaration vs function expression;

console.log(operation(5, 4));

function operation(add1, add2) {
  return add1 + add2;
}

const addition = operation(19, 20);
console.log(addition);

//this is the function declaration with the name and function can be hoisted
//we can also store the function value in the variable
/********************************************************************************/

//function expression

//assigning the function to the variable is known as function expression
//and also known as te anonymous function we can say anonymous as it does not have its name.
//we first create a function and assign it to the variable is called function expression
// console.log(getIntro("akshay"));

const getIntro = function (name) {
  return name;
};

getIntro("Nikhil");
console.log(getIntro("Nikhil"));
// var name1 = getIntro("abhijeet");

// as we see the fuction does not  have the name is called as the anonymous function and function expression
//as the function expression is not hoisted as it is stored in the variable with let and const it shows error that the "Refrence error" that "cannot access before initialization"
//and when we use var to the function expression it shows error  that "getIntro is not the function".
//so we need to call getIntro inthe variable;
/*************************************************************************************/

//(IIFEs)immediately invoke function expression
//if we want to use function immediately which we do not need in further code at that time we can use IIF

(function () {
  console.log("javascript coding");
})();

(() => {
  console.log("jscode");
})();

/***************************************************************************/

//callback function

//in callback function we pass the anonymous function as the argument in the any method for example foreach(callbackfun)
//we can also use the nameing functn but it will be not shown further afterwards it will be not in use

const array2 = [1, 2, 3, 4];

array2.forEach(function (ele) {
  console.log(ele);
});

array2.forEach(function print1(ele) {
  console.log(ele);
});

console.log(print1());
