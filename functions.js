
function myFunction () {
    console.log("Hello, this is a function")
}

// function greeter (name, age, height) {
//     const greeting = `Hi, ${name} Good evening!, You are ${age} years old and your height is ${height}`;
//     // console.log(greeting);

//     return greeting;
// }

// myFunction();
// const value = greeter("Amarachi", 35, "5ft");
// console.log(value)

//IIFE

//code reusability and single responsibility

// () => console.log("hello")

// calculate a person's age


// const person = {
//     name: 'Amarachi',
//     age: 35,
//     calculateAge: (yob) => {
//         const date = new Date();
//         const currentYear = date.getFullYear()
//         const age = currentYear - yob;

//         return age;
//     }
// }

// const age = person.calculateAge(1990)

function sum (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function calcAge (yob) {
    const date = new Date();
    const currentYear = date.getFullYear()
    const age = currentYear - yob;

    return age;
}

function generateGreeting (name) {
    const greeting = `Hi, ${name} Good evening!`;

    return greeting;
}

function calcAverageScore (testScores) {
    let sum = 0;
    for (let i = 0; i < testScores.length; i++) {
        const score = testScores[i];
        sum += score;
    }

    return sum/testScores.length;
}

const student1 = {
    full_name: 'Amarachi',
    yob: 1994,
    score: [23, 54, 67, 90, 12],
    evaluate: function() {
        const greeting = generateGreeting(this.full_name);
        const age = calcAge(this.yob);
        const averageScore = calcAverageScore(this.score);

        const analysis = `${greeting}, Your age is ${age} and your average score is ${averageScore}`

        return analysis;
    }
}

const student2 = {
    full_name: 'Arize',
    yob: 1984,
    score: [22, 54, 65, 10, 12],
    evaluate: function() {
        const greeting = generateGreeting(this.full_name);
        const age = calcAge(this.yob);
        const averageScore = calcAverageScore(this.score);

        const analysis = `${greeting}, Your age is ${age} and your average score is ${averageScore}`

        return analysis;
    }
}

// console.log(student1.evaluate())
// console.log(student2.evaluate())

// (() => {
//     console.log("I'm a regular function, but can be an IIFE if you try")
// })();

// (function abc () {
//     console.log("Hello")
//   })();

// regFunction();
