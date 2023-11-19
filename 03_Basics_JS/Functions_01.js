// function addTwoNUmbers(num1, num2) { // num1 and num2 is parameters
//   console.log(num1 + num2);
// }
function addTwoNUmbers(num1, num2) {
  // num1 and num2 is parameters
  return num1 + num2;
  console.log("abhi"); // doesnot execute due the return statement
}

const result = addTwoNUmbers(3, 5); //here the parameter is called arguments

// console.log("Result: ", result);

function loginUserMsg(username = "sam") {
  if (!username) {
    console.log("please enter a username");
    return;
  }

  return `${username} just logged in`;
}

// console.log(loginUserMsg("abhi"));
// console.log(loginUserMsg());

// function calculateCartPrice(...num1) { // Rest operator
//   return num1;
// }
function calculateCartPrice(val1, val2, ...num1 /* rest operator  = ...*/) {
  return num1;
}

console.log(calculateCartPrice(300, 400, 600, 800)); // => num1 contains [ 600, 800 ], val1=300 and val2=400

const user = {
  username: "Abhishek",
  price: 999,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myArr = [300, 200, 400, 100];

function returnedSecondValue(Array) {
  return Array[1];
}

// console.log(returnedSecondValue(myArr))
console.log(returnedSecondValue([400, 800, 600, 300]));
