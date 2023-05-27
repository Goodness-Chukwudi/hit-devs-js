let name = "Emmanuel Emmanuel";
    name = ' Chukwudi Goodness';
let age = 23
age = false; 

const helloDiv = document.getElementById("hello");
helloDiv.innerText += name + ". I am " + age+ " years old";

const names = ["John", "Haruna", "Ekong"]

let result;

// Numberic operations
const num1  = 10;
const num2 = 20;
const sum = num1 + num2;
const sub = num2 - num1;
const mult = num2 * num1;
const div = num2 / num1;
const power = num2 ** num1;
const remainder = 17 % 3;

const type = typeof names

//converting a number to a string
const num = 45;

//String operations
//concatenation
const string1 = "My name is ";
const string2 = "Emeka Okafor";
const stringConcat = string1 + string2;

const myName = "Emeka Haruna";
const myAge = 56;
const statement1 = "My name is " + myName + " and I am " + myAge + " years old";

//string literals
const statement2 = `My name is ${myName} and I am ${myAge} years old. Now you know my name`;


result = statement2.replace("name", "nomenclature");
result = statement2.replaceAll("name", "nomenclature");
result = statement2.length;
result = "string is a collection of characters enclosed in a quote".indexOf("collection");
result = "string is a collection of characters enclosed in a quote collection".lastIndexOf("collection");
result = "string is a collection of".slice(0, 5);
result = "string is a collection of characters enclosed in a quote collection".split("of");

const studentAges = [3, 4, 5, 56, 62, 5];
const names2 = ["John", "Haruna", "Ekong", "Ken"]

result = studentAges.indexOf(56);
result = names2.indexOf("Ken");
result = names2.includes("Ken");
result = names2.length;
// names2.push("Blessing");
// names2.pop();
names2.shift();
names2.unshift("Blessing");
result = names2;

//Booleans
result = true.toString();

//Objects
const userDetails = {
    name: "Arinze",
    age: 35,
    height: "100cm",
    hobbies: ["swimming", "coding", "football"],
    gender: "male",
    score: 51
}
result = "name: " + userDetails.name;
result = "height: " + userDetails.height;
result = "age: " + userDetails["age"];
result = "element 3: " + names2[2];

const keys = Object.keys(userDetails);
const values = Object.values(userDetails);

userDetails.nationality = "Nigerian";
delete userDetails.height;
userDetails.height = null;
result = userDetails;

//comparison operators
//== equality
//!= inequality
// === strict equality
// !== strict inequality
// < less than
// > greater than
// >== greater than or equals
// >= greater than or equals
// <= less than or equals
// <== less than or equals
// if ("male" == "male")
result = 2 === "2"
result = 2 == "2"
result = 5 < 3
result = 5 <= 5
result = 5 != 5

//Logical operators
// && AND
// || OR
// ! NOT

result = false && true && false && true;
result = false || false;
result = !true;

const passMark = 60;

//Conditionals
if (userDetails.score == passMark) {
    result = "Congratulations " + userDetails.name + " You passed!";
}

const A = 70, B = 60, C = 50, D = 40, E = 35;
let score = 37;
const canAllow = true;


if (score >= A) {
    result = "Congratulations " + userDetails.name + " You passed with an A";
} else if (score >= B) {
    result = "Congratulations " + userDetails.name + " You passed with a B";
} else if (score >= C) {
    result = "Congratulations " + userDetails.name + " You passed with a C";
} else if (score >= D) {
    result = "Congratulations " + userDetails.name + " You passed with a D";
} else if (score >= E && !canAllow) {
    result = "Sorry " + userDetails.name + " You passed with an E";
} else if (score >= E && canAllow) {
    score += 20;
    result = "Congratulations " + userDetails.name + " You passed with an E but we added 20 marks ectra to you. Your new is " +score;
} else {
    result = "Sorry bro " + userDetails.name + " You failed";
}

//Iteration Or Loops
//for loop, while loop, do while loop, forEach loop
let number = 10;
number = number + 1
result = number;

const numberOfToTimes = 10;

// for (let i = 0; i < numberOfToTimes; i++) {
//     console.log(i);
    
// }

// for (let j = 100; j > 0; j--) {
//     console.log(j)
// }

let hasAnswered = true;
let counter = 0;
while (!hasAnswered) {
    console.log("Hello");
    counter++;
    if (counter >= 10) hasAnswered = true;
}

do {
    console.log("Hello");
    if (counter >= 10) hasAnswered = true;
} while (!hasAnswered);

const items = ["Rice", "Beans", "Potato", "Yam"]

// items.forEach(item => {
//     console.log(item)
// });

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log(item)
}

const person = {
    name: "Emeka Nkechi",
    age: 45,
    height: 69,
    weight: 70
}

console.log("Person's name is " + person.name);





// console.log(result);
helloDiv.innerText = result;