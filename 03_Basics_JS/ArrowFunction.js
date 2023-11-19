const user = {
  username: "Abhi",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); // this refers to current Context
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username="Bubun"
// user.welcomeMessage()

// console.log(this); // due to node environment, "this" keyword refers to empty but in the browser it behaves different it gives window Object

// function one() {
//     let username = "abhi"
// //   console.log(this);
//   console.log(this.username); // here the output =>undefined .So "this", works on objects but not in the functions
// }

// one();

/*
const one = () => {
  let username = "abhi";
//   console.log(this.username); // it also gives undefined
  console.log(this); // =>{}, empty parenthesis
};

one()

*/

//Arrow functions

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2; // implicit return

// const addTwo = (num1, num2) =>( num1 + num2); // impicit return
const addTwo = (num1, num2) => ({ username: "abhi", age: 21 }); // return an object

console.log(addTwo(3, 4));


