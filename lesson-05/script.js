// Destructuring
const person = { name: 'Alice', age: 30, city: 'NYC' };
const { name, age } = person;

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Arrow functions
const double = n => n * 2;
const add = (a, b) => a + b;

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);

// Optional chaining
const user = { profile: { email: 'test@example.com' } };
const email = user?.profile?.email;

// Template literals
const greeting = `Hello, ${name}! You are ${age} years old.`;

// Demo button
document.getElementById('demoBtn').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.textContent = `
Destructuring: ${name}, ${age}
Spread: ${combined}
Arrow function: ${double(5)}
Map: ${doubled}
Filter: ${evens}
Reduce: ${sum}
Optional chaining: ${email}
Template literal: ${greeting}
    `;
});
