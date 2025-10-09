// Variables
const name = "Alice";
const age = 30;

// Arrays
const fruits = ["apple", "banana", "orange"];

// Objects
const person = {
    name: "Bob",
    age: 25,
    city: "New York"
};

// Button click event
const button = document.getElementById('greetBtn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    output.textContent = `Hello, ${name}! You are ${age} years old.`;
});

// Console output
console.log('Name:', name);
console.log('Fruits:', fruits);
console.log('Person:', person);
