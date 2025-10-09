# Lesson 11: Node.js Fundamentals

## What is Node.js?

Node.js lets you run JavaScript outside the browser - on your computer or server!

**What can you build with Node.js?**
- Web servers and APIs
- Command-line tools
- Desktop applications
- Real-time chat apps
- And much more!

## Your First Node.js Program

Create a file called `hello.js`:

```javascript
console.log('Hello from Node.js!');
```

Run it:
```bash
node hello.js
```

## Working with Files

Node.js can read and write files on your computer.

### Reading Files

```javascript
const fs = require('fs');

// Read file synchronously (blocks code)
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Read file asynchronously (better!)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

// Modern way with promises
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Error:', err);
    }
}
```

### Writing Files

```javascript
const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('output.txt', 'Hello, World!');
        console.log('File written successfully!');
    } catch (err) {
        console.error('Error:', err);
    }
}

// Append to file
async function appendFile() {
    await fs.appendFile('log.txt', 'New log entry\n');
}
```

### Working with Directories

```javascript
const fs = require('fs').promises;

// List files in directory
async function listFiles() {
    const files = await fs.readdir('./');
    console.log(files);
}

// Create directory
async function createDir() {
    await fs.mkdir('new-folder');
}

// Check if file exists
async function fileExists(path) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}
```

## Modules: Organizing Your Code

### Creating a Module

```javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

### Using a Module

```javascript
// app.js
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(10, 4)); // 6

// Or destructure
const { add, subtract } = require('./math');
console.log(add(5, 3));
```

### ES Modules (Modern Way)

Add `"type": "module"` to your `package.json`:

```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// app.js
import { add, subtract } from './math.js';
console.log(add(5, 3));
```

## NPM: Node Package Manager

NPM lets you use code written by other developers!

### Initializing a Project

```bash
npm init -y
```

This creates `package.json` - your project's configuration file.

### Installing Packages

```bash
# Install a package
npm install chalk

# Install as dev dependency (only for development)
npm install --save-dev jest

# Install globally (available everywhere)
npm install -g nodemon
```

### Using Packages

```javascript
// Using chalk for colored console output
const chalk = require('chalk');

console.log(chalk.blue('Hello in blue!'));
console.log(chalk.red.bold('Error message!'));
console.log(chalk.green('Success!'));
```

### Useful Packages

- **chalk** - Colored terminal output
- **axios** - HTTP requests
- **dotenv** - Environment variables
- **nodemon** - Auto-restart server on changes
- **express** - Web framework (next lesson!)

## Command-Line Arguments

```javascript
// app.js
const args = process.argv.slice(2);
console.log('Arguments:', args);

// Run: node app.js hello world
// Output: Arguments: ['hello', 'world']
```

### Better CLI with Commander

```bash
npm install commander
```

```javascript
const { program } = require('commander');

program
    .option('-n, --name <name>', 'Your name')
    .option('-a, --age <age>', 'Your age')
    .parse();

const options = program.opts();
console.log(`Hello, ${options.name}! You are ${options.age} years old.`);

// Run: node app.js --name Alice --age 30
```

## Environment Variables

Store sensitive data (API keys, passwords) in environment variables.

### Using dotenv

```bash
npm install dotenv
```

Create `.env` file:
```
API_KEY=your_secret_key_here
DATABASE_URL=mongodb://localhost:27017/mydb
PORT=3000
```

**Important:** Add `.env` to `.gitignore`!

```javascript
// app.js
require('dotenv').config();

const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

console.log('API Key:', apiKey);
console.log('Port:', port);
```

## Complete Example: CLI Todo App

```javascript
// todo.js
const fs = require('fs').promises;
const { program } = require('commander');
const chalk = require('chalk');

const TODO_FILE = 'todos.json';

async function loadTodos() {
    try {
        const data = await fs.readFile(TODO_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function saveTodos(todos) {
    await fs.writeFile(TODO_FILE, JSON.stringify(todos, null, 2));
}

async function addTodo(text) {
    const todos = await loadTodos();
    todos.push({
        id: Date.now(),
        text,
        completed: false
    });
    await saveTodos(todos);
    console.log(chalk.green('✓ Todo added!'));
}

async function listTodos() {
    const todos = await loadTodos();
    
    if (todos.length === 0) {
        console.log(chalk.yellow('No todos yet!'));
        return;
    }
    
    todos.forEach(todo => {
        const status = todo.completed ? chalk.green('✓') : chalk.red('✗');
        const text = todo.completed 
            ? chalk.gray.strikethrough(todo.text)
            : todo.text;
        console.log(`${status} [${todo.id}] ${text}`);
    });
}

async function completeTodo(id) {
    const todos = await loadTodos();
    const todo = todos.find(t => t.id === parseInt(id));
    
    if (!todo) {
        console.log(chalk.red('Todo not found!'));
        return;
    }
    
    todo.completed = true;
    await saveTodos(todos);
    console.log(chalk.green('✓ Todo completed!'));
}

async function deleteTodo(id) {
    const todos = await loadTodos();
    const filtered = todos.filter(t => t.id !== parseInt(id));
    
    if (filtered.length === todos.length) {
        console.log(chalk.red('Todo not found!'));
        return;
    }
    
    await saveTodos(filtered);
    console.log(chalk.green('✓ Todo deleted!'));
}

// CLI Commands
program
    .command('add <text>')
    .description('Add a new todo')
    .action(addTodo);

program
    .command('list')
    .description('List all todos')
    .action(listTodos);

program
    .command('done <id>')
    .description('Mark todo as completed')
    .action(completeTodo);

program
    .command('delete <id>')
    .description('Delete a todo')
    .action(deleteTodo);

program.parse();
```

**Usage:**
```bash
node todo.js add "Learn Node.js"
node todo.js add "Build a project"
node todo.js list
node todo.js done 1234567890
node todo.js delete 1234567890
```

## Challenge: File Organizer

Build a CLI tool that:
1. Takes a directory path as input
2. Organizes files by extension into folders
3. Example: Move all `.jpg` files to `images/`, `.txt` to `documents/`, etc.
4. Shows progress with colored output
5. Has options for dry-run (preview without moving)

## Resources

- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [NPM Documentation](https://docs.npmjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## Key Takeaways

✅ Node.js runs JavaScript outside the browser
✅ Use `fs` module to work with files
✅ `require()` or `import` to use modules
✅ NPM manages packages and dependencies
✅ Use `.env` for sensitive configuration
✅ Commander makes building CLIs easy

---

**Next:** In Lesson 12, you'll learn Express.js and build your first web server!
