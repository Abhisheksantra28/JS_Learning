// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

/*
var c = 300; // global scope

if (true) {
    //Block scope
  let a = 10;
  const b = 20;
   c = 30;
}

console.log(c);

*/

let a = 300;

if (true) {
  //Block scope
  let a = 10;
  const b = 20;
  //   console.log("inner a: ",a);
}

// console.log(a)

function one() {
  const username = "Abhi";
  function two() {
    const website = "Youtube";
    // console.log(username);
  }
//   console.log(website); // => website is not define error

  two();
}

one();


// +++++++++++++  Interesting +++++++++++++++++++


console.log(addone(5)); // doesnot give any error
function addone(num){
  return num + 1;
}

// addone(5)





// console.log(addTwo(5)); it gives error,ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){  // it is also called expression
  return num +2;
}

console.log(addTwo(5)) 