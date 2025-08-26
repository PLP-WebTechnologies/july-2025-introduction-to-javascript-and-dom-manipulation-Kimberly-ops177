// ============================
// Part 1: Variables & Conditionals
// ============================
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", function() {
  const age = parseInt(ageInput.value);

  if (age >= 18) {
    ageResult.textContent = "You are an adult!";
  } else if (age >= 13) {
    ageResult.textContent = "You are a teenager!";
  } else {
    ageResult.textContent = "You are a child!";
  }
});

// ============================
// Part 2: Functions
// ============================

// Function 1: Greeting
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

const greetBtn = document.getElementById("greetBtn");
const greetResult = document.getElementById("greetResult");

greetBtn.addEventListener("click", function() {
  const name = prompt("Enter your name:");
  greetResult.textContent = greet(name);
});

// Function 2: Calculate square
function square(number) {
  return number * number;
}
console.log("Square of 5 is:", square(5));

// ============================
// Part 3: Loops
// ============================

// Loop 1: For loop to display fruits
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const showFruitsBtn = document.getElementById("showFruitsBtn");
const fruitList = document.getElementById("fruitList");

showFruitsBtn.addEventListener("click", function() {
  fruitList.innerHTML = ""; // Clear previous list
  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
  }
});

// Loop 2: While loop example
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// ============================
// Part 4: DOM Manipulation - Background Color Change
// ============================

const changeColorBtn = document.getElementById("changeColorBtn");

// Function to generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener to change background color on button click
changeColorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});
