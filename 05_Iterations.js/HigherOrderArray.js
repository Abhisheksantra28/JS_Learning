// for of

// ["","",""]

// [ {},{},{}]

// const arr = [ 1, 2, 3 , 4 ,5 ]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings =  "Hello World"

// for (const greet of greetings) {
//     console.log(`each char of ${greet}`);
// }

// Maps

/*
const map = new Map() // unique values(it does not contain any duplicate value) and maintain the inserting order
map.set("in", "India")
map.set("fr", "France")
map.set("Us", "United states of india")

// console.log(map);

for (const [key, value] of map) {  // this loop doesnot work in objects

    console.log(`key: ${key} and value : ${value}`);
    
}
*/

/*
const myObj = {
  js: "javscript",
  cpp: "c++",
  rb: "Ruby",
  swift: "Swift by apple",
};

for (const key in myObj) {
  console.log(key); // gives the keys
  console.log(myObj[key]); // gives the values
}

*/

/*
const programming = ["js", "rb", "python", "java", "cpp"];

for (const key in programming) {
  console.log(key); // it gives the indeces(keys)
  console.log(programming[key]); 
}

// for in loop doesnot work in maps because maps are not iterable

*/

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( (item)=>{
//     console.log(item);
// } )

// function printMe(item){
//   console.log(item)
// }

// coding.forEach(printMe)

/*
coding.forEach((item,index,arr)=>{
  console.log(item,index,arr)
}) 
//mainly used in array of obj
*/

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((obj) => console.log(obj.languageFileName));
