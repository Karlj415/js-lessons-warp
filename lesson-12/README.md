# Lesson 12: Express.js - Building Web Servers

## What is Express?

Express is a web framework for Node.js that makes building servers and APIs easy!

**What can you build?**
- REST APIs
- Web applications
- Microservices
- Real-time applications

## Your First Express Server

### Installation

```bash
npm init -y
npm install express
```

### Basic Server

```javascript
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

Run it:
```bash
node server.js
```

Visit `http://localhost:3000` in your browser!

## Routes

Routes define how your server responds to different URLs.

```javascript
const express = require('express');
const app = express();

// GET request
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

// POST request
app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

// PUT request
app.put('/update', (req, res) => {
    res.send('Data updated!');
});

// DELETE request
app.delete('/delete', (req, res) => {
    res.send('Data deleted!');
});

app.listen(3000);
```

## Route Parameters

```javascript
// Dynamic routes
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Multiple parameters
app.get('/posts/:year/:month', (req, res) => {
    const { year, month } = req.params;
    res.send(`Posts from ${month}/${year}`);
});

// Visit: http://localhost:3000/users/123
// Visit: http://localhost:3000/posts/2024/03
```

## Query Parameters

```javascript
app.get('/search', (req, res) => {
    const { q, page, limit } = req.query;
    res.json({
        query: q,
        page: page || 1,
        limit: limit || 10
    });
});

// Visit: http://localhost:3000/search?q=javascript&page=2&limit=20
```

## Sending JSON Responses

```javascript
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 }
    ];
    
    res.json(users);
});

// Status codes
app.get('/api/error', (req, res) => {
    res.status(404).json({ error: 'Not found' });
});
```

## Middleware

Middleware functions run before your route handlers.

```javascript
const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse form data

// Custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();  // Pass to next middleware/route
});

// Middleware for specific routes
app.use('/api', (req, res, next) => {
    console.log('API route accessed');
    next();
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Data' });
});
```

### Logging Middleware

```bash
npm install morgan
```

```javascript
const morgan = require('morgan');

app.use(morgan('dev'));  // Logs all requests
```

## Handling POST Requests

```javascript
app.use(express.json());

app.post('/api/users', (req, res) => {
    const { name, email, age } = req.body;
    
    // Validation
    if (!name || !email) {
        return res.status(400).json({ 
            error: 'Name and email are required' 
        });
    }
    
    // Create user (in real app, save to database)
    const newUser = {
        id: Date.now(),
        name,
        email,
        age: age || null
    };
    
    res.status(201).json(newUser);
});
```

Test with curl or Postman:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","age":30}'
```

## Complete REST API Example

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// In-memory database
let posts = [
    { id: 1, title: 'First Post', content: 'Hello World', author: 'Alice' },
    { id: 2, title: 'Second Post', content: 'Learning Express', author: 'Bob' }
];

// GET all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// GET single post
app.get('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post);
});

// CREATE post
app.post('/api/posts', (req, res) => {
    const { title, content, author } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ 
            error: 'Title and content are required' 
        });
    }
    
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        author: author || 'Anonymous'
    };
    
    posts.push(newPost);
    res.status(201).json(newPost);
});

// UPDATE post
app.put('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    const { title, content, author } = req.body;
    
    if (title) post.title = title;
    if (content) post.content = content;
    if (author) post.author = author;
    
    res.json(post);
});

// DELETE post
app.delete('/api/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    posts.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

## Error Handling

```javascript
// 404 handler (put at the end)
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handler (must have 4 parameters)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Async error handling
app.get('/api/data', async (req, res, next) => {
    try {
        const data = await fetchData();
        res.json(data);
    } catch (err) {
        next(err);  // Pass to error handler
    }
});
```

## CORS (Cross-Origin Requests)

Allow your API to be accessed from different domains.

```bash
npm install cors
```

```javascript
const cors = require('cors');

// Allow all origins
app.use(cors());

// Or configure
app.use(cors({
    origin: 'http://localhost:5173',  // Your React app
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
```

## Organizing Routes

For larger apps, split routes into separate files.

```javascript
// routes/posts.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all posts' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create post' });
});

module.exports = router;

// server.js
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);
```

## Serving Static Files

```javascript
// Serve files from 'public' folder
app.use(express.static('public'));

// Now files in public/ are accessible:
// public/index.html -> http://localhost:3000/index.html
// public/style.css -> http://localhost:3000/style.css
```

## Challenge: Blog API

Build a complete blog API with:

**Endpoints:**
- `GET /api/posts` - Get all posts (with pagination)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `GET /api/posts/search?q=keyword` - Search posts

**Features:**
- Input validation
- Proper error handling
- CORS enabled
- Request logging
- Status codes (200, 201, 400, 404, 500)

**Bonus:**
- Add comments to posts
- Filter posts by author
- Sort posts by date

## Testing Your API

### Using curl

```bash
# GET
curl http://localhost:3000/api/posts

# POST
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","content":"Hello"}'

# PUT
curl -X PUT http://localhost:3000/api/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated"}'

# DELETE
curl -X DELETE http://localhost:3000/api/posts/1
```

### Using Postman

1. Download Postman
2. Create a new request
3. Set method (GET, POST, etc.)
4. Enter URL
5. Add headers and body if needed
6. Click Send

## Resources

- [Express Documentation](https://expressjs.com/)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpstatuses.com/)

## Key Takeaways

✅ Express makes building servers easy
✅ Routes handle different URLs and methods
✅ Middleware processes requests before routes
✅ Use `res.json()` for API responses
✅ Always validate input and handle errors
✅ Use proper HTTP status codes

---

**Next:** In Lesson 13, you'll connect your API to a real database!
