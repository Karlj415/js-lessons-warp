# Lesson 5: Modern JavaScript (ES6+)

## What is ES6+?

ES6 (also called ES2015) introduced many features that make JavaScript easier to write and read. Let's learn the most useful ones!

## 1. Destructuring

Destructuring lets you "unpack" values from arrays and objects.

### Array Destructuring

```javascript
// Old way
const colors = ['red', 'green', 'blue'];
const first = colors[0];
const second = colors[1];

// New way
const [first, second, third] = colors;
console.log(first);   // 'red'
console.log(second);  // 'green'

// Skip values
const [, , third] = colors;
console.log(third);  // 'blue'
```

### Object Destructuring

```javascript
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Old way
const name = person.name;
const age = person.age;

// New way
const { name, age, city } = person;
console.log(name);  // 'Alice'
console.log(age);   // 30

// Rename while destructuring
const { name: personName } = person;
console.log(personName);  // 'Alice'

// Default values
const { country = 'USA' } = person;
console.log(country);  // 'USA'
```

## 2. Spread Operator (...)

The spread operator "spreads out" array or object values.

### With Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Copy an array
const copy = [...arr1];

// Add items
const withExtra = [...arr1, 4, 5];
console.log(withExtra);  // [1, 2, 3, 4, 5]
```

### With Objects

```javascript
const person = {
    name: 'Alice',
    age: 30
};

// Copy an object
const personCopy = { ...person };

// Add/override properties
const personWithCity = {
    ...person,
    city: 'New York'
};

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
```

## 3. Rest Parameters

Rest parameters collect multiple values into an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15

// Mix with regular parameters
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}!`;
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));
// 'Hello Alice, Bob, Charlie!'
```

## 4. Template Literals

We've used these before - they make strings easier!

```javascript
const name = 'Alice';
const age = 30;

// Old way
const message = 'My name is ' + name + ' and I am ' + age + ' years old.';

// New way
const message = `My name is ${name} and I am ${age} years old.`;

// Multi-line strings
const html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Expressions inside
const price = 19.99;
const tax = 0.08;
console.log(`Total: $${(price * (1 + tax)).toFixed(2)}`);
```

## 5. Arrow Functions

Shorter syntax for functions!

```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Even shorter (implicit return)
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const square = x => x * x;

// No parameters
const greet = () => console.log('Hello!');
```

### When to Use Arrow Functions

```javascript
// Great for array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);
```

## 6. Default Parameters

```javascript
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

console.log(greet());                    // 'Hello, Guest!'
console.log(greet('Alice'));             // 'Hello, Alice!'
console.log(greet('Bob', 'Hi'));         // 'Hi, Bob!'
```

## 7. Optional Chaining (?.)

Safely access nested properties that might not exist.

```javascript
const user = {
    name: 'Alice',
    address: {
        city: 'New York'
    }
};

// Old way (risky!)
const city = user.address.city;  // Works
const zip = user.address.zip;    // undefined

// What if address doesn't exist?
const user2 = { name: 'Bob' };
// const city = user2.address.city;  // ERROR!

// New way (safe!)
const city = user2.address?.city;  // undefined (no error!)
const zip = user.address?.zip;     // undefined

// With functions
const result = user.getName?.();  // Only calls if getName exists
```

## 8. Nullish Coalescing (??)

Provide default values for `null` or `undefined`.

```javascript
// Old way
const name = user.name || 'Guest';

// Problem: treats 0, '', false as "no value"
const count = 0;
const display = count || 10;  // 10 (but we wanted 0!)

// New way (only for null/undefined)
const display = count ?? 10;  // 0 (correct!)

const name = null ?? 'Guest';       // 'Guest'
const name = undefined ?? 'Guest';  // 'Guest'
const name = '' ?? 'Guest';         // '' (empty string is kept)
const name = 0 ?? 10;               // 0 (zero is kept)
```

## 9. Array Methods

### map() - Transform each item

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];
const names = users.map(user => user.name);
console.log(names);  // ['Alice', 'Bob']
```

### filter() - Keep items that match

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4, 6]

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 25 }
];
const adults = users.filter(user => user.age >= 18);
```

### reduce() - Combine into single value

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum);  // 15

// Find max
const max = numbers.reduce((max, n) => n > max ? n : max);

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);  // { apple: 3, banana: 2, orange: 1 }
```

### find() - Get first match

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: 'Bob' }
```

### some() and every()

```javascript
const numbers = [1, 2, 3, 4, 5];

// some() - at least one matches
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven);  // true

// every() - all match
const allPositive = numbers.every(n => n > 0);
console.log(allPositive);  // true
```

## 10. Modules

Split your code into separate files!

```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// main.js
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
console.log(PI);              // 3.14159

// Import everything
import * as math from './math.js';
console.log(math.add(5, 3));

// Default export
// utils.js
export default function greet(name) {
    return `Hello, ${name}!`;
}

// main.js
import greet from './utils.js';
```

## Practice: Refactor Old Code

Take your Todo List from Lesson 3 and refactor it using:
- Arrow functions
- Destructuring
- Array methods (map, filter)
- Optional chaining
- Template literals

## Challenge: Data Processing

Given this data:

```javascript
const students = [
    { name: 'Alice', grades: [85, 90, 92] },
    { name: 'Bob', grades: [78, 82, 80] },
    { name: 'Charlie', grades: [95, 98, 100] },
    { name: 'David', grades: [65, 70, 68] }
];
```

Write functions using modern JavaScript to:
1. Calculate average grade for each student
2. Find students with average >= 80
3. Get list of all student names
4. Find the highest average grade

## Resources

- [ES6 Features Guide](https://www.freecodecamp.org/news/es6-guide/)
- [JavaScript.info Modern JavaScript](https://javascript.info/)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Key Takeaways

✅ Destructuring makes extracting values easier
✅ Spread operator (...) copies and combines arrays/objects
✅ Arrow functions are shorter and cleaner
✅ Optional chaining (?.) prevents errors
✅ Array methods (map, filter, reduce) are powerful tools

---

**Next:** In Lesson 6, you'll learn how to test and debug your code!
