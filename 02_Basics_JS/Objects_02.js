// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "1235abhc";
tinderUser.name = "Bubun";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "example@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Abhi",
      lastname: "santra",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.lastname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1,obj2} // problem which occur in array

// const obj3 = {...obj1,...obj2} //this easy and latest
const obj3 = Object.assign({}, obj1, obj2); // curly braces is optional
// console.log(obj3);

const users = [
  {
    name: "Abhi",
    email: "abhi@gmail.com",
  },
  {
    name: "Abhi",
    email: "abhi@gmail.com",
  },
  {
    name: "Abhi",
    email: "abhi@gmail.com",
  },
  {
    name: "Abhi",
    email: "abhi@gmail.com",
  },
];

users[0].email; // array of objects can be accessed, in this way

// console.log(tinderUser);

// console.log((Object.keys(tinderUser))); // output gives all the keys in the form of array. So, dataType is An array
// console.log((Object.values(tinderUser)));
// console.log((Object.entries(tinderUser)));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
// console.log(tinderUser.hasOwnProperty("isLogged"))

const course = {
  coursename: "easy js in hindi",
  price: "999",
  courseInstructor: "Abhishek",
};

// course.courseInstructor

const { courseInstructor: intructor } = course;
// const {coursename,courseInstructor,price} = course

// console.log(courseInstructor);
console.log(intructor);



// JSON
// {
//     "name":"abhisek",
//     "coursename":"js",
//     "price":"free"
// }


//Array os objects , api response in the form of array
[
    {},
    {},
    {}
]
