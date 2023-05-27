//DOM

// document.body.innerHTML = `
// <div>
//     <p>We got bored and changed the body  contents</p>
// </div>
// `
//references DOM elements
const helloElement = document.getElementById("hello")
// const helloElement = document.querySelector("#hello")
// const helloElement2 = document.getElementsByClassName("text-danger")
const helloElement2 = document.querySelectorAll(".text-danger")
// const helloElement3 = document.getElementsByTagName("p");
const helloElement3 = document.querySelectorAll("p");
// console.log(helloElement3)

// helloElement.innerHTML = "<b>My name is no longer Emeka</b>";
// helloElement.addEventListener("mouseenter", () => {
//     helloElement.classList = "text-primary h1";
// })
// helloElement.addEventListener("mouseleave", () => {
//     helloElement.setAttribute("style", "background-color: blue;");
//     helloElement.classList = "text-danger";
// })

let isOn = false

const bulbElement = document.getElementById("bulb");
const bulbSwitchBtn = document.getElementById("switch");
const pElement = document.createElement("p");
const span = document.createElement("span");

bulbSwitchBtn.addEventListener("click", () => {
    isOn = !isOn;
    // bulbSwitchBtn.innerHTML = isOn ? "switch on" : "switch off";
    if (!isOn) {
        bulbElement.setAttribute("src", "./images/bulb-on-removebg-preview.png");
        bulbSwitchBtn.innerHTML =  "switch off";
        span.innerHTML = "Hey! Our bulb is on"
    }
    else {
        bulbElement.setAttribute("src", "./images/bulb-off-removebg-preview.png");
        bulbSwitchBtn.innerHTML =  "switch on";
        span.innerHTML = "Hey! Our bulb is off"
    }
    pElement.appendChild(span);
    document.getElementById("container").appendChild(pElement)
})