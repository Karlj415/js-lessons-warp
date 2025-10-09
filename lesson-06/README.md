# Lesson 6: Testing & Debugging

## Why Test Your Code?

Imagine building a house without checking if the walls are straight or the roof is secure. Testing is how we make sure our code works correctly!

**Benefits of testing:**
- Catch bugs before users do
- Make sure new changes don't break old features
- Document how your code should work
- Feel confident when making changes

## Debugging with Console

The simplest way to debug is using `console.log()`!

### Basic Console Methods

```javascript
// Regular log
console.log('Hello, World!');

// Log multiple values
const name = 'Alice';
const age = 30;
console.log('Name:', name, 'Age:', age);

// Warnings
console.warn('This is a warning!');

// Errors
console.error('This is an error!');

// Tables (great for arrays/objects)
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];
console.table(users);

// Timing code
console.time('myLoop');
for (let i = 0; i < 1000000; i++) {
    // Some code
}
console.timeEnd('myLoop');
```

## Chrome DevTools

Your browser has powerful debugging tools built-in!

### Opening DevTools

- **Windows/Linux:** Press `F12` or `Ctrl + Shift + I`
- **Mac:** Press `Cmd + Option + I`

### Console Tab

Try this in the console:
```javascript
let x = 5;
let y = 10;
console.log(x + y);
```

### Elements Tab

- Inspect HTML elements
- See and modify CSS in real-time
- View element properties

### Sources Tab (Debugging)

Set breakpoints to pause code execution:

```javascript
function calculateTotal(price, tax) {
    debugger;  // Code will pause here!
    const total = price + (price * tax);
    return total;
}

calculateTotal(100, 0.08);
```

When code pauses:
- Hover over variables to see their values
- Step through code line by line
- Check the call stack

## Unit Testing with Jest

Jest is a popular testing framework for JavaScript.

### Installing Jest

```bash
# In your project folder
npm init -y
npm install --save-dev jest
```

Update `package.json`:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### Writing Your First Test

Create `math.js`:
```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, subtract, multiply };
```

Create `math.test.js`:
```javascript
const { add, subtract, multiply } = require('./math');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
});
```

Run tests:
```bash
npm test
```

### Common Jest Matchers

```javascript
// Exact equality
expect(2 + 2).toBe(4);

// Object/array equality
expect({ name: 'Alice' }).toEqual({ name: 'Alice' });

// Truthiness
expect(true).toBeTruthy();
expect(false).toBeFalsy();
expect(null).toBeNull();
expect(undefined).toBeUndefined();

// Numbers
expect(10).toBeGreaterThan(5);
expect(5).toBeLessThan(10);
expect(0.1 + 0.2).toBeCloseTo(0.3);

// Strings
expect('Hello World').toMatch(/World/);

// Arrays
expect([1, 2, 3]).toContain(2);

// Exceptions
expect(() => {
    throw new Error('Oops!');
}).toThrow('Oops!');
```

### Testing Async Code

```javascript
// Testing promises
test('fetches user data', async () => {
    const data = await fetchUser(1);
    expect(data.name).toBe('Alice');
});

// Or with .resolves
test('fetches user data', () => {
    return expect(fetchUser(1)).resolves.toHaveProperty('name');
});
```

## Example: Testing FizzBuzz

```javascript
// fizzbuzz.js
function fizzBuzz(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    
    return result;
}

module.exports = fizzBuzz;
```

```javascript
// fizzbuzz.test.js
const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
    test('returns correct output for n=15', () => {
        const result = fizzBuzz(15);
        expect(result).toEqual([
            1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
            11, 'Fizz', 13, 14, 'FizzBuzz'
        ]);
    });
    
    test('handles n=1', () => {
        expect(fizzBuzz(1)).toEqual([1]);
    });
    
    test('handles n=0', () => {
        expect(fizzBuzz(0)).toEqual([]);
    });
    
    test('multiples of 3 are Fizz', () => {
        const result = fizzBuzz(9);
        expect(result[2]).toBe('Fizz');  // 3
        expect(result[5]).toBe('Fizz');  // 6
        expect(result[8]).toBe('Fizz');  // 9
    });
    
    test('multiples of 5 are Buzz', () => {
        const result = fizzBuzz(10);
        expect(result[4]).toBe('Buzz');  // 5
        expect(result[9]).toBe('Buzz');  // 10
    });
    
    test('multiples of 15 are FizzBuzz', () => {
        const result = fizzBuzz(15);
        expect(result[14]).toBe('FizzBuzz');  // 15
    });
});
```

## Test-Driven Development (TDD)

Write tests BEFORE writing code!

**Process:**
1. Write a test (it will fail)
2. Write minimal code to make it pass
3. Refactor if needed
4. Repeat

**Example:**

```javascript
// Step 1: Write test first
test('isPalindrome returns true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

// Step 2: Write code to pass
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Step 3: Add more tests
test('isPalindrome returns false for "hello"', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('isPalindrome handles spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});
```

## Common Debugging Strategies

### 1. Read the Error Message

```javascript
// Error: Cannot read property 'name' of undefined
const user = undefined;
console.log(user.name);  // This line causes the error

// Fix: Check if user exists
if (user) {
    console.log(user.name);
}
```

### 2. Use console.log Strategically

```javascript
function processData(data) {
    console.log('Input:', data);  // Check input
    
    const filtered = data.filter(item => item.active);
    console.log('After filter:', filtered);  // Check intermediate step
    
    const mapped = filtered.map(item => item.name);
    console.log('After map:', mapped);  // Check output
    
    return mapped;
}
```

### 3. Isolate the Problem

```javascript
// Break complex code into smaller pieces
function complexCalculation(a, b, c) {
    const step1 = a * b;
    console.log('Step 1:', step1);
    
    const step2 = step1 + c;
    console.log('Step 2:', step2);
    
    const step3 = step2 / 2;
    console.log('Step 3:', step3);
    
    return step3;
}
```

### 4. Check Your Assumptions

```javascript
// Assume array has items
const numbers = [];
const first = numbers[0];  // undefined!

// Better: Check first
if (numbers.length > 0) {
    const first = numbers[0];
}
```

## Challenge: Test Your Todo List

Take your Todo List from Lesson 3 and:

1. Extract the logic into separate functions
2. Write tests for each function
3. Aim for 90%+ code coverage

**Functions to test:**
- `addTodo(text)` - adds a new todo
- `toggleTodo(id)` - marks todo as complete/incomplete
- `deleteTodo(id)` - removes a todo
- `getTodos()` - returns all todos
- `getActiveTodos()` - returns incomplete todos
- `getCompletedTodos()` - returns completed todos

## Code Coverage

See how much of your code is tested:

```bash
npm test -- --coverage
```

This shows:
- Which lines are tested
- Which branches are tested
- Overall coverage percentage

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Chrome DevTools Guide](https://developer.chrome.com/docs/devtools/)
- [JavaScript Debugging Tips](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)

## Key Takeaways

✅ Use `console.log()` to inspect values
✅ Chrome DevTools has powerful debugging features
✅ Write tests to catch bugs early
✅ Jest makes testing JavaScript easy
✅ Test-Driven Development (TDD) can improve code quality
✅ Read error messages carefully - they tell you what's wrong

---

**Next:** In Lesson 7, you'll start learning React and build modern web applications!
