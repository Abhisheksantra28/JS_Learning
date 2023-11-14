// Primitive

// 7 types: String , Number , Boolean, null, undefined , Symbol , BigInt

// js is dynamically typed language

const outSideTemp = null;
// console.log(typeof outSideTemp) => object

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id===anotherId) =>false

// Reference Type (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Abhi",
  age: 21,
};

const myFunction = function () {
  console.log("Hello world!");
};

// console.log( typeof myFunction) => object function

// https://262.ecma-international.org/5.1/#sec-11.4.3

//*********************************************** */
// MEMORY

//Stack(Primitive), Heap(Non-Primitive)
