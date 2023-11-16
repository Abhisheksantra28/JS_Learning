//singleton => if constructor create the objects
// Object.create

//Object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Abhi",
  "full name": "Abhi Santra",
  [mySym]: "mykey1",
  age: 21,
  location: "Singur",
  email: "Abhi@gmail.com",
  isLoggedIn: false,
};

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.age = 20;
// Object.freeze(jsUser);
// jsUser.email = "bubun@gmail.com"; // cannot propogate to JsUser
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js User")
}

console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`)
}
console.log(jsUser.greetingTwo());
