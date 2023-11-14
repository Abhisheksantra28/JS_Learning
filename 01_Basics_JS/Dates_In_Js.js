//  Dates

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// let mycreatedDate = new Date(2023,0,28)

// let mycreatedDate = new Date(2023,0,28,5,3)
// let mycreatedDate = new Date("2023-01-28")
let mycreatedDate = new Date("01-12-2023");

// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getDay());

const test = newDate.toLocaleString("default", {
  weekday: "long",
});

console.log(test);
