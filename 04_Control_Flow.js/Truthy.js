const email = "abhi@gmail.com";

if (email) {
  console.log("Got user email");
} else {
  console.log("Don,t got user email");
}

// falsy values

// false , 0 , -0, BigInt 0n, "", null , undefined , NaN

// baki sab hai
//Truthy values

// "0","false"," ", [], {}, function(){}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("The obj is empty");
}

// Nullish Coalescing Operator (??):null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15; //val1=10

console.log(val1);




//ternary operator

// condition ? true:false

const teaPrice = 100;
teaPrice <=80 ? console.log("Less than 80"): console.log("More than 80");