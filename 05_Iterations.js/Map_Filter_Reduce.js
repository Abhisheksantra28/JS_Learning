/*
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item)=>{
    console.log(item);
    // return item => undefined
})
// forEach loop does not return anything 
// console.log(values);   => undefined

*/

/*
*************** Filter ***************
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4); // works fine (explecit return )
// const newNums = myNums.filter((num) => {num > 4}); // gives empty array due to {}
// const newNums = myNums.filter((num) => { return num > 4}); 
console.log(newNums);

*/

/*
// *************** Map ***************

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((num) => num + 10);
const newNums = myNums
                .map((num) => num * 10)
                .map((num)=>num +2)
                .filter((num)=> num >= 45)

console.log(newNums);

*/

// *************** Reduce ***************

const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce((acc, curVal) => {
//   return acc + curVal;
// }, 0);
// const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0);

// console.log(myTotal);

const myCart = [
  {
    itemName: "js course",
    price: 300,
  },
  {
    itemName: "python course",
    price: 800,
  },
  {
    itemName: "java course",
    price: 250,
  },
  {
    itemName: "MERN course",
    price: 450,
  },
];

const totalCartPrice = myCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalCartPrice);
