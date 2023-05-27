// OOP Object Oriented Programming

const student = {
    name: "Adamu Emeka Tinubu",
    age: 65,
    class: 200,
    cgpa: 1.2,
    walk: () => console.log("I can walk!"),
    study: () => console.log("I'm studying")
}

const car = {
    color: "Red",
    model: "Toyota 2015",
    move: () => console.log("The care is moving")
}

//Classes

class Student {
    name;
    age;
    course;
    cgpa;

    constructor(name, age, course, cgpa) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.cgpa = cgpa
    }

    walk = () => this.name + " can walk!";
    study = () => this.name + " is studying";
}

const student1 = new Student("Emeka", 45, "Computer Science", 1.2); //create an instance of the class
const student2 = new Student("Akindele", 25, "Medicine", 4.2); //create an instance of the class
const student3 = new Student(); //create an instance of the class

console.log(student1.name);
console.log(student1.walk());
console.log(student2.name);
console.log(student3);

const date = new Date("Jan 23, 2023");

console.log("Year   -- ", date.getFullYear())
console.log("getDate   -- ", date.getDate())
console.log("getDay   -- ", date.getDay())
console.log("getMonth   -- ", date.getMonth())
console.log("time   -- ", date.toLocaleTimeString())