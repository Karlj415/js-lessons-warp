# Lesson 1: JavaScript Basics

## What is JavaScript?

JavaScript is a programming language that makes websites interactive. When you click a button, fill out a form, or see animations on a website - that's JavaScript at work!

**Where does JavaScript run?**
- In your web browser (Chrome, Firefox, Safari)
- On servers using Node.js (which you installed in Lesson 0)

## Your First JavaScript Program

Let's write some code! We'll create a simple webpage that shows a message.

### Step 1: Create Your Files

1. In VS Code, create a new folder called `lesson-01-practice`
2. Inside it, create two files:
   - `index.html`
   - `script.js`

### Step 2: Write the HTML

In `index.html`, type this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Hello, JavaScript!</h1>
    <button id="myButton">Click Me!</button>
    
    <script src="script.js"></script>
</body>
</html>
```

### Step 3: Write the JavaScript

In `script.js`, type this:

```javascript
// This is a comment - JavaScript ignores it
// Let's make the button do something!

const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Hello, World!');
});
```

### Step 4: See It Work!

1. Right-click on `index.html` in VS Code
2. Select "Open with Live Server" (if you installed the extension)
3. OR just double-click the file to open it in your browser
4. Click the button!

## Understanding Variables

Variables are like boxes that store information. JavaScript has three ways to create variables:

```javascript
// const - use this for values that won't change
const name = "Alice";
const age = 25;

// let - use this for values that might change
let score = 0;
score = 10;  // This is okay!

// var - old way, avoid using it
var oldStyle = "don't use this";
```

**Beginner Tip:** Always use `const` unless you know the value will change, then use `let`.

## Data Types

JavaScript can store different types of information:

### 1. Numbers
```javascript
const age = 30;
const price = 19.99;
const negative = -5;
```

### 2. Strings (Text)
```javascript
const firstName = "John";
const lastName = 'Doe';  // Single or double quotes both work
const message = `Hello, ${firstName}!`;  // Template literal - combines text and variables
```

### 3. Booleans (True/False)
```javascript
const isStudent = true;
const hasGraduated = false;
```

### 4. Arrays (Lists)
```javascript
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

// Access items by position (starting at 0)
console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
```

### 5. Objects (Collections of Related Data)
```javascript
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Access properties
console.log(person.name);  // "Alice"
console.log(person.age);   // 30
```

## Basic Operations

### Math Operations
```javascript
const sum = 5 + 3;        // 8
const difference = 10 - 4; // 6
const product = 6 * 7;     // 42
const quotient = 20 / 4;   // 5
const remainder = 17 % 5;  // 2 (modulo - gives remainder)
```

### String Operations
```javascript
const greeting = "Hello" + " " + "World";  // "Hello World"
const name = "Alice";
const message = `Welcome, ${name}!`;  // "Welcome, Alice!"
```

## Practice Exercise

Create a new file called `practice.js` and try this:

```javascript
// 1. Create variables for your information
const myName = "Your Name";
const myAge = 25;
const myHobbies = ["reading", "coding", "gaming"];

// 2. Create an object about yourself
const me = {
    name: myName,
    age: myAge,
    hobbies: myHobbies,
    isLearning: true
};

// 3. Print it to the console
console.log(me);
console.log(`My name is ${me.name} and I am ${me.age} years old.`);
```

To run this:
1. Open your terminal in VS Code
2. Type: `node practice.js`
3. Press Enter

## Challenge: Hello World Webpage

Create a webpage that:
1. Has a button
2. When clicked, shows an alert with "Hello, World!"
3. Save your work in a new Git repository

**Steps:**
1. Create `index.html` and `script.js`
2. Write the code (use the example from the beginning of this lesson)
3. In terminal, type:
   ```bash
   git init
   git add .
   git commit -m "My first JavaScript project"
   ```

## Resources to Learn More

- [MDN JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) - Detailed guide
- [JavaScript.info](https://javascript.info/first-steps) - Interactive tutorials
- [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) - Practice exercises

## Key Takeaways

✅ JavaScript makes websites interactive
✅ Use `const` for values that don't change, `let` for values that do
✅ Main data types: numbers, strings, booleans, arrays, objects
✅ `console.log()` helps you see what your code is doing

---

**Next:** In Lesson 2, you'll learn how to make decisions in your code and create reusable functions!
