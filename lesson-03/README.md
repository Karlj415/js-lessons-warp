# Lesson 3: Working with the DOM

## What is the DOM?

**DOM** stands for **Document Object Model**. It's how JavaScript sees and interacts with your HTML webpage.

Think of it like this:
- HTML creates the structure (like building blocks)
- JavaScript can move, change, add, or remove those blocks
- The DOM is the connection between them

## Selecting Elements

Before you can change something on the page, you need to "grab" it first.

### Method 1: getElementById

```html
<h1 id="title">Hello World</h1>
```

```javascript
const title = document.getElementById('title');
console.log(title);  // Shows the h1 element
```

### Method 2: querySelector (Most Flexible)

```html
<p class="message">This is a paragraph</p>
<button class="btn">Click me</button>
```

```javascript
// Select by class
const message = document.querySelector('.message');

// Select by tag
const button = document.querySelector('button');

// Select by ID (works too!)
const title = document.querySelector('#title');
```

### Method 3: querySelectorAll (Get Multiple Elements)

```html
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
```

```javascript
const items = document.querySelectorAll('li');

// Loop through them
items.forEach(item => {
    console.log(item.textContent);
});
```

## Changing Content

### Change Text

```javascript
const heading = document.querySelector('h1');

// Change the text
heading.textContent = 'New Title!';

// Or use innerHTML (can include HTML tags)
heading.innerHTML = '<strong>Bold Title!</strong>';
```

### Change Styles

```javascript
const box = document.querySelector('.box');

// Change individual styles
box.style.color = 'blue';
box.style.backgroundColor = 'yellow';
box.style.fontSize = '20px';
```

### Add/Remove Classes

```html
<style>
.highlight {
    background-color: yellow;
    font-weight: bold;
}
</style>

<p class="text">Some text</p>
```

```javascript
const text = document.querySelector('.text');

// Add a class
text.classList.add('highlight');

// Remove a class
text.classList.remove('highlight');

// Toggle a class (add if not there, remove if there)
text.classList.toggle('highlight');
```

## Handling Events

Events are things that happen on your webpage: clicks, typing, mouse movement, etc.

### Click Events

```html
<button id="myButton">Click Me!</button>
<p id="output"></p>
```

```javascript
const button = document.getElementById('myButton');
const output = document.getElementById('output');

button.addEventListener('click', function() {
    output.textContent = 'Button was clicked!';
});

// Or with arrow function
button.addEventListener('click', () => {
    output.textContent = 'Button was clicked!';
});
```

### Input Events

```html
<input type="text" id="nameInput" placeholder="Enter your name">
<p id="greeting"></p>
```

```javascript
const input = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

input.addEventListener('input', () => {
    greeting.textContent = `Hello, ${input.value}!`;
});
```

### Mouse Events

```javascript
const box = document.querySelector('.box');

// When mouse enters
box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = 'lightblue';
});

// When mouse leaves
box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'white';
});
```

## Creating and Adding Elements

```javascript
// Create a new element
const newParagraph = document.createElement('p');

// Add text to it
newParagraph.textContent = 'This is a new paragraph!';

// Add a class
newParagraph.classList.add('message');

// Add it to the page
document.body.appendChild(newParagraph);
```

## Removing Elements

```javascript
const element = document.querySelector('.remove-me');
element.remove();
```

## Complete Example: Counter App

```html
<!DOCTYPE html>
<html>
<head>
    <title>Counter App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        #count {
            font-size: 48px;
            margin: 20px;
        }
        button {
            font-size: 20px;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Counter App</h1>
    <div id="count">0</div>
    <button id="decrease">-</button>
    <button id="reset">Reset</button>
    <button id="increase">+</button>

    <script src="counter.js"></script>
</body>
</html>
```

```javascript
// counter.js
let count = 0;

const countDisplay = document.getElementById('count');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

function updateDisplay() {
    countDisplay.textContent = count;
    
    // Change color based on value
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
```

## Challenge: Dynamic Todo List

Build a todo list app where users can:
1. Add new todos
2. Mark todos as complete (toggle)
3. Delete todos
4. Save todos to localStorage (so they persist after page reload)

**Starter HTML:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <style>
        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>
<body>
    <h1>My Todo List</h1>
    <input type="text" id="todoInput" placeholder="Enter a todo">
    <button id="addBtn">Add</button>
    <ul id="todoList"></ul>

    <script src="todo.js"></script>
</body>
</html>
```

**Hints:**
- Use `localStorage.setItem()` to save
- Use `localStorage.getItem()` to load
- Store todos as JSON: `JSON.stringify()` and `JSON.parse()`

## Resources

- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript.info - DOM](https://javascript.info/document)
- [DOM Manipulation Video Tutorial](https://www.youtube.com/watch?v=0ik6X4DJAoE)

## Key Takeaways

✅ Use `querySelector()` to select elements
✅ Use `addEventListener()` to respond to events
✅ Change content with `textContent` or `innerHTML`
✅ Change styles with `element.style` or `classList`
✅ Create elements with `document.createElement()`

---

**Next:** In Lesson 4, you'll learn about asynchronous JavaScript and how to fetch data from APIs!
