# Lesson 2: Control Flow & Functions

## Making Decisions in Code

In real life, we make decisions all the time: "If it's raining, bring an umbrella." JavaScript can make decisions too!

## If/Else Statements

```javascript
const age = 18;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You're too young to vote.");
}
```

### Multiple Conditions

```javascript
const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

### Comparison Operators

```javascript
5 === 5    // true (equal to)
5 !== 3    // true (not equal to)
10 > 5     // true (greater than)
3 < 7      // true (less than)
5 >= 5     // true (greater than or equal)
4 <= 10    // true (less than or equal)
```

**Important:** Use `===` (three equals) instead of `==` (two equals). It's more reliable!

## Loops: Repeating Actions

### For Loop
Use when you know how many times to repeat:

```javascript
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

### Loop Through an Array

```javascript
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Modern way (easier to read):
for (const fruit of fruits) {
    console.log(fruit);
}
```

### While Loop
Use when you don't know how many times to repeat:

```javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
```

## Functions: Reusable Code Blocks

Functions are like recipes - you write them once and use them many times!

### Basic Function

```javascript
function greet() {
    console.log("Hello!");
}

// Use the function
greet();  // Output: Hello!
```

### Functions with Parameters

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");  // Output: Hello, Alice!
greet("Bob");    // Output: Hello, Bob!
```

### Functions that Return Values

```javascript
function add(a, b) {
    return a + b;
}

const result = add(5, 3);
console.log(result);  // Output: 8
```

### Arrow Functions (Modern Way)

```javascript
// Traditional function
function multiply(a, b) {
    return a * b;
}

// Arrow function (shorter)
const multiply = (a, b) => {
    return a * b;
};

// Even shorter (when you only return something)
const multiply = (a, b) => a * b;
```

## Practice Examples

### Example 1: Check if Number is Even

```javascript
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));  // true
console.log(isEven(7));  // false
```

### Example 2: Find Maximum Number

```javascript
function findMax(numbers) {
    let max = numbers[0];
    
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    
    return max;
}

const nums = [3, 7, 2, 9, 1];
console.log(findMax(nums));  // Output: 9
```

### Example 3: Count Vowels in a String

```javascript
function countVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (const char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("Hello World"));  // Output: 3
```

## Challenge: FizzBuzz

This is a classic programming challenge! Write a function that:
- Takes a number `n`
- Returns an array from 1 to `n`
- Replace multiples of 3 with "Fizz"
- Replace multiples of 5 with "Buzz"
- Replace multiples of both with "FizzBuzz"

**Example:** `fizzBuzz(15)` should return:
```
[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

**Try it yourself first!** Here's a starter:

```javascript
function fizzBuzz(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        // Your code here
    }
    
    return result;
}

console.log(fizzBuzz(15));
```

<details>
<summary>Click to see solution</summary>

```javascript
function fizzBuzz(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    
    return result;
}
```
</details>

## Resources

- [MDN Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Conditionals](https://javascript.info/ifelse)
- [JavaScript.info - Loops](https://javascript.info/while-for)

## Key Takeaways

✅ Use `if/else` to make decisions
✅ Use loops to repeat actions
✅ Functions make your code reusable
✅ Arrow functions are a shorter way to write functions
✅ Always use `===` instead of `==`

---

**Next:** In Lesson 3, you'll learn how to make web pages interactive by manipulating the DOM!
