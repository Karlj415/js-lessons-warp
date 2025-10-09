// Functions to test
function add(a, b) {
    return a + b;
}

function isEven(n) {
    return n % 2 === 0;
}

function fizzBuzz(n) {
    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

// Simple test runner
function test(description, fn) {
    try {
        fn();
        console.log(`✓ ${description}`);
        return true;
    } catch (error) {
        console.error(`✗ ${description}: ${error.message}`);
        return false;
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${expected} but got ${actual}`);
            }
        }
    };
}

// Run tests
document.getElementById('testBtn').addEventListener('click', () => {
    console.clear();
    console.log('Running tests...\n');
    
    const results = [];
    
    results.push(test('add(2, 3) equals 5', () => {
        expect(add(2, 3)).toBe(5);
    }));
    
    results.push(test('isEven(4) returns true', () => {
        expect(isEven(4)).toBe(true);
    }));
    
    results.push(test('isEven(5) returns false', () => {
        expect(isEven(5)).toBe(false);
    }));
    
    results.push(test('fizzBuzz(15) returns FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    }));
    
    const passed = results.filter(r => r).length;
    const total = results.length;
    
    document.getElementById('results').innerHTML = `
        <h2>Test Results</h2>
        <p>${passed}/${total} tests passed</p>
        <p>Check console for details</p>
    `;
});
