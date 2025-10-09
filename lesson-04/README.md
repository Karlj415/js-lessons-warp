# Lesson 4: Asynchronous JavaScript

## What is Asynchronous Code?

Imagine you're at a restaurant:
- **Synchronous (normal):** You order food, wait at the counter until it's ready, then sit down
- **Asynchronous:** You order food, get a buzzer, sit down and chat, then get your food when it's ready

JavaScript works the same way! Some tasks take time (loading data from the internet), so JavaScript lets you do other things while waiting.

## Why Do We Need This?

```javascript
// This would freeze your entire webpage!
// DON'T DO THIS:
function waitThreeSeconds() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Just waiting...
    }
}
```

Instead, we use asynchronous code to wait without freezing!

## Method 1: Callbacks (Old Way)

A callback is a function you pass to another function to run later.

```javascript
console.log('Start');

setTimeout(function() {
    console.log('This runs after 2 seconds');
}, 2000);

console.log('End');

// Output:
// Start
// End
// This runs after 2 seconds
```

### Problem: Callback Hell

```javascript
// Gets messy quickly!
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            // This is hard to read!
        });
    });
});
```

## Method 2: Promises (Better Way)

A Promise is like a receipt - it promises to give you something later.

### Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
        resolve('It worked!');
    } else {
        reject('Something went wrong');
    }
});
```

### Using a Promise

```javascript
myPromise
    .then(result => {
        console.log(result);  // 'It worked!'
    })
    .catch(error => {
        console.log(error);
    });
```

### Real Example: Simulating a Delay

```javascript
function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Waited ${seconds} seconds`);
        }, seconds * 1000);
    });
}

wait(2)
    .then(message => {
        console.log(message);  // After 2 seconds: "Waited 2 seconds"
    });
```

### Chaining Promises

```javascript
wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 seconds passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 seconds passed');
    });
```

## Method 3: Async/Await (Best Way!)

This makes asynchronous code look like normal code!

### Basic Syntax

```javascript
async function myFunction() {
    const result = await somePromise;
    console.log(result);
}
```

### Example: Waiting

```javascript
function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

async function countdown() {
    console.log('3');
    await wait(1);
    console.log('2');
    await wait(1);
    console.log('1');
    await wait(1);
    console.log('Go!');
}

countdown();
```

### Error Handling with Try/Catch

```javascript
async function fetchData() {
    try {
        const result = await somePromise;
        console.log(result);
    } catch (error) {
        console.log('Error:', error);
    }
}
```

## Fetching Data from APIs

The `fetch()` function gets data from the internet!

### Basic Fetch

```javascript
async function getJoke() {
    try {
        // 1. Fetch the data
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        // 2. Convert to JSON
        const data = await response.json();
        
        // 3. Use the data
        console.log(data.setup);
        console.log(data.punchline);
    } catch (error) {
        console.log('Error fetching joke:', error);
    }
}

getJoke();
```

### Checking for Errors

```javascript
async function getUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error.message);
    }
}

getUser('octocat');
```

## Complete Example: GitHub Profile Viewer

```html
<!DOCTYPE html>
<html>
<head>
    <title>GitHub Profile Viewer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
        }
        input, button {
            padding: 10px;
            font-size: 16px;
        }
        #profile {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        img {
            border-radius: 50%;
            width: 100px;
        }
        .loading {
            color: #666;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <h1>GitHub Profile Viewer</h1>
    <input type="text" id="username" placeholder="Enter GitHub username">
    <button id="searchBtn">Search</button>
    <div id="profile"></div>

    <script src="github.js"></script>
</body>
</html>
```

```javascript
// github.js
const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('searchBtn');
const profileDiv = document.getElementById('profile');

async function fetchGitHubUser(username) {
    // Show loading message
    profileDiv.innerHTML = '<p class="loading">Loading...</p>';
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const user = await response.json();
        displayProfile(user);
    } catch (error) {
        profileDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

function displayProfile(user) {
    profileDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.name}">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || 'No bio available'}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <a href="${user.html_url}" target="_blank">View Profile</a>
    `;
}

searchBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        fetchGitHubUser(username);
    }
});

// Allow Enter key to search
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
```

## Challenge: Weather App

Build an app that fetches weather data!

**API to use:** OpenWeatherMap (free)
1. Sign up at https://openweathermap.org/api
2. Get your free API key
3. Use this endpoint: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

**Features to implement:**
- Input for city name
- Display temperature, weather description, and icon
- Show loading state
- Handle errors (city not found)

## Common Async Patterns

### Multiple Requests at Once

```javascript
async function getMultipleUsers() {
    const users = ['octocat', 'torvalds', 'gaearon'];
    
    // Fetch all at the same time
    const promises = users.map(user => 
        fetch(`https://api.github.com/users/${user}`).then(r => r.json())
    );
    
    const results = await Promise.all(promises);
    console.log(results);
}
```

### Timeout for Slow Requests

```javascript
function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), timeout)
        )
    ]);
}
```

## Resources

- [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JavaScript.info Promises](https://javascript.info/promise-basics)
- [Async/Await Tutorial](https://javascript.info/async-await)

## Key Takeaways

✅ Use `async/await` for cleaner asynchronous code
✅ Always use `try/catch` for error handling
✅ `fetch()` gets data from APIs
✅ Check `response.ok` before using data
✅ Show loading states for better user experience

---

**Next:** In Lesson 5, you'll learn modern JavaScript features (ES6+) that make coding easier!
