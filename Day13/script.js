// ARRAY

//Declare an array
const fruits = ["apple", "banana", "orange"];

//Access elements
console.log(fruits[0]);

//Add to array
fruits.push("mango");

//Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//OBJECT

//Declare an object
const person = {
    name: "Teejay",
    age: 25,
    isDeveloper: true
};

//Access properties
console.log(person.name);

//Add new property
person.city = "Enugu";

//Loop through object
for (let key in person) {
    console.log(key + ": " + person[key]);
}


//Array of Object

const users = [
  { name: "Teejay", age: 25 },
  { name: "Deimos", age: 23 },
  { name: "Prince", age: 30 },
];

users.forEach(user => {
    console.log(user.name + " is " + user.age + " years old")
})


