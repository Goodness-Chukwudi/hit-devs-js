const helloDiv = document.getElementById("hello");

let personName  = " Arinze Ezinwa"
personName = " Isaac Ogbonna"

//camel casing 
const secondStudentName = "Onyema Onyema"
//paschal
const SecondStudentName = "Onyema Onyema"
//snake
const second_student_name = "Onyema Onyema"

//Data Types

//primitive types 

//numbers 1, 1.2, 2/3, NaN
let personAge = "50";
// personAge = personAge.toString();
// personAge = Number(personAge);
let personAgeInt = parseInt(personAge);
let personAgeFloat = parseFloat(personAge);
const num1 = 45;
// console.log(personAgeInt)
//strings "name", "boy", "mango", "20"
const userName = "My name is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam expedita quisquam provident error maiores quod necessitatibus excepturi tempora, aliquid nostrum, repellendus rem perspiciatis, quam porro consectetur aut? Repellat, autem architecto.";
let num2 = "50";
num2 = parseInt(num2);
"sffds".concat("Hello")
const statement = "My name is Onyema Tinubu";
let result = statement;
result = statement.replace("Tinubu", "Obi")
result = statement.length
result = statement.split("a")
result = statement.indexOf("name")
// console.log("result -- ", result);

//boolean true or false

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

//Logical operators
// && AND
// || OR
// ! NOT

//falsy
//0, "", null, undefined, NaN
// truthy "false"

let age = 20;
// console.log(typeof age)

// const ans = age === 15;

if(age >= 18) {
    console.log("Hello" + personName+ " Your age is "  + age + " and you are an adult");
    // prompt("Na wah o")
} else if (age >= 13) {
    console.log("Hello" + personName+ " Your age is "  + age + " and you are a teenager");
    // prompt("E remain small")

} else {
    console.log("Hello" + personName+ " Your age is "  + age + " and you are a baby");
    // prompt("E remain small")
}


//null
//undefined

//Object Types

//Arrays
const names = ["Nedin", "Tinubu", "Adamu", "Obi", "Blessing"];
// names[2] = "Umar";
// console.log(names)
// names.push("Arinze")
// names.pop();
// names.unshift("Arinze");
// names.shift();
// console.log(names)
names.map((name, i, array) => {
    // console.log(name)
})

const nedin = {
    height: "7t",
    age: 45,
    gender: "male",
    country: "Nigeria"
}

// for (const key in nedin) {
//     // console.log(key)
//     console.log("Nedin's "+ key + " is " + nedin[key])
// }

const keys = Object.keys(nedin);
console.log(keys)

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log("Nedin's "+ key + " is " + nedin[key])
}
//Objects


// Tuples
//Maps
//Sets

//Person
//Car


helloDiv.innerText += name;