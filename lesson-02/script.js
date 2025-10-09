// Check if number is even
function isEven(num) {
    return num % 2 === 0;
}

// FizzBuzz function
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result;
}

// Event listeners
const input = document.getElementById('numberInput');
const checkBtn = document.getElementById('checkBtn');
const fizzBuzzBtn = document.getElementById('fizzBuzzBtn');
const output = document.getElementById('output');

checkBtn.addEventListener('click', () => {
    const num = parseInt(input.value);
    output.textContent = isEven(num) ? `${num} is even` : `${num} is odd`;
});

fizzBuzzBtn.addEventListener('click', () => {
    const result = fizzBuzz(15);
    output.textContent = result.join(', ');
});
