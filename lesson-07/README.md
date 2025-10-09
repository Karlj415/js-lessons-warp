# Lesson 7: React Basics

## What is React?

React is a JavaScript library for building user interfaces. It makes creating interactive web apps easier and more organized!

**Why React?**
- Build reusable components (like LEGO blocks)
- Automatically updates the page when data changes
- Huge community and ecosystem
- Used by Facebook, Netflix, Airbnb, and thousands more

## Setting Up Your First React App

```bash
# Create a new React app with Vite (fast and modern)
npm create vite@latest my-react-app -- --template react

# Navigate into the folder
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser to `http://localhost:5173` - you should see your React app!

## Understanding JSX

JSX looks like HTML but it's actually JavaScript!

```jsx
// This is JSX
const element = <h1>Hello, World!</h1>;

// It gets converted to:
const element = React.createElement('h1', null, 'Hello, World!');
```

### JSX Rules

```jsx
// 1. Must return a single parent element
function App() {
    return (
        <div>
            <h1>Title</h1>
            <p>Paragraph</p>
        </div>
    );
}

// Or use a Fragment
function App() {
    return (
        <>
            <h1>Title</h1>
            <p>Paragraph</p>
        </>
    );
}

// 2. Use className instead of class
<div className="container">Content</div>

// 3. Close all tags
<img src="photo.jpg" />
<input type="text" />

// 4. Use camelCase for attributes
<div onClick={handleClick} onMouseEnter={handleHover}>
```

### JavaScript in JSX

```jsx
function Greeting() {
    const name = 'Alice';
    const age = 30;
    
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old</p>
            <p>Next year you'll be {age + 1}</p>
        </div>
    );
}
```

## Your First Component

Components are reusable pieces of UI.

```jsx
// Simple component
function Welcome() {
    return <h1>Welcome to React!</h1>;
}

// Use it
function App() {
    return (
        <div>
            <Welcome />
            <Welcome />
            <Welcome />
        </div>
    );
}
```

## Props: Passing Data to Components

Props are like function parameters for components.

```jsx
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Use it
function App() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />
        </div>
    );
}

// Destructuring props (cleaner)
function Greeting({ name, age }) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Age: {age}</p>
        </div>
    );
}

<Greeting name="Alice" age={30} />
```

## State: Making Components Interactive

State is data that can change over time.

```jsx
import { useState } from 'react';

function Counter() {
    // useState returns [value, setter function]
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}
```

### Multiple State Variables

```jsx
function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    
    return (
        <div>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input 
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
            />
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <p>Hello, {name}! You are {age} years old.</p>
        </div>
    );
}
```

## Handling Events

```jsx
function Button() {
    const handleClick = () => {
        alert('Button clicked!');
    };
    
    const handleHover = () => {
        console.log('Mouse entered!');
    };
    
    return (
        <button 
            onClick={handleClick}
            onMouseEnter={handleHover}
        >
            Click Me
        </button>
    );
}
```

## Conditional Rendering

```jsx
function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign in.</h1>;
}

// Or use ternary operator
function Greeting({ isLoggedIn }) {
    return (
        <h1>
            {isLoggedIn ? 'Welcome back!' : 'Please sign in.'}
        </h1>
    );
}

// Or use && for conditional display
function Notification({ hasMessages }) {
    return (
        <div>
            {hasMessages && <p>You have new messages!</p>}
        </div>
    );
}
```

## Rendering Lists

```jsx
function TodoList() {
    const todos = [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false },
        { id: 3, text: 'Deploy it', completed: false }
    ];
    
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}
```

**Important:** Always use a unique `key` prop when rendering lists!

## Complete Example: Todo App

```jsx
import { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: input, completed: false }
            ]);
            setInput('');
        }
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add a todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
```

## useEffect Hook

Run code when component mounts or when data changes.

```jsx
import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        
        // Cleanup function
        return () => clearInterval(interval);
    }, []); // Empty array = run once on mount
    
    return <p>Seconds: {seconds}</p>;
}

// Run when specific value changes
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetch(`/api/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [userId]); // Run when userId changes
    
    if (!user) return <p>Loading...</p>;
    
    return <div>{user.name}</div>;
}
```

## Challenge: Movie Search App

Build an app that:
1. Has an input for searching movies
2. Fetches data from OMDb API: `http://www.omdbapi.com/?apikey=YOUR_KEY&s=SEARCH`
3. Displays movie results as cards
4. Shows loading state while fetching
5. Handles errors gracefully

**Get a free API key:** http://www.omdbapi.com/apikey.aspx

## Resources

- [React Official Docs](https://react.dev/)
- [React Tutorial](https://react.dev/learn)
- [React Hooks Reference](https://react.dev/reference/react)

## Key Takeaways

✅ React uses components to build UIs
✅ JSX lets you write HTML-like code in JavaScript
✅ Props pass data to components
✅ State (`useState`) makes components interactive
✅ `useEffect` runs code at specific times
✅ Always use `key` prop when rendering lists

---

**Next:** In Lesson 8, you'll learn about state management with Redux!
