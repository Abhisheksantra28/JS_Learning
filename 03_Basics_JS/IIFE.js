// Immediately Invoked Function Expression (IIFE)

// it is used to remove global scope pollution, sometimes may happen global scope pollution

// (function defination)()

(function one() {
    // named IIFE
  console.log("DB Connected");
})();// ; is important

((name) => {
  console.log(`Db connected by ${name}`);
})("abhi");
