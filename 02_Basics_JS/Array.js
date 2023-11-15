// array

const myArr = [0, 1, 2, 4, 5, 6];

//Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(0);
// myArr.unshift(9);
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// *******************

//slice , splice

// console.log("A ", myArr);
// const mynew1 = myArr.slice(1, 4);
// console.log(mynew1);
// console.log("B ", myArr);

// const myArr2 = myArr.splice(1, 4);
// console.log(myArr2);
// console.log("c ", myArr);

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const mergeArr = marvel_heros.concat(dc_heros);
// console.log(mergeArr);

const all_Heros = [...marvel_heros, ...dc_heros]; //spread operator
// console.log(all_Heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = anotherArray.flat(Infinity);
// console.log(real_another_array)

console.log(Array.isArray("Abhi"));
console.log(Array.from("Abhi"));

console.log(Array.from({ name: "Abhi", Age: 21 })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
