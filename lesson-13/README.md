# Lesson 13: Databases - MongoDB & PostgreSQL

## Why Use a Database?

So far, we've stored data in memory (arrays, objects). But when the server restarts, all data is lost!

Databases solve this by:
- Persisting data permanently
- Handling large amounts of data efficiently
- Supporting complex queries
- Providing data integrity and security

## Two Types of Databases

### SQL (Relational)
- Structured data in tables with rows and columns
- Uses SQL query language
- Example: PostgreSQL, MySQL
- Best for: Complex relationships, transactions

### NoSQL (Document-based)
- Flexible, JSON-like documents
- No fixed schema
- Example: MongoDB
- Best for: Rapid development, flexible data

## MongoDB (NoSQL)

### Installation

**Option 1: MongoDB Atlas (Cloud - Recommended for beginners)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster (free tier)
4. Get connection string

**Option 2: Local Installation**
- Download from https://www.mongodb.com/try/download/community

### Connecting with Mongoose

```bash
npm install mongoose dotenv
```

Create `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb
```

```javascript
// db.js
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

module.exports = connectDB;
```

### Creating a Schema and Model

```javascript
// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    tags: [String],
    published: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true  // Adds createdAt and updatedAt
});

module.exports = mongoose.model('Post', postSchema);
```

### CRUD Operations

```javascript
const Post = require('./models/Post');

// CREATE
async function createPost() {
    const post = new Post({
        title: 'My First Post',
        content: 'Hello, MongoDB!',
        author: 'Alice',
        tags: ['javascript', 'mongodb']
    });
    
    await post.save();
    console.log('Post created:', post);
}

// READ - Find all
async function getAllPosts() {
    const posts = await Post.find();
    console.log(posts);
}

// READ - Find one
async function getPostById(id) {
    const post = await Post.findById(id);
    console.log(post);
}

// READ - Find with conditions
async function getPublishedPosts() {
    const posts = await Post.find({ published: true })
        .sort({ createdAt: -1 })  // Newest first
        .limit(10);
    console.log(posts);
}

// UPDATE
async function updatePost(id) {
    const post = await Post.findByIdAndUpdate(
        id,
        { title: 'Updated Title', published: true },
        { new: true }  // Return updated document
    );
    console.log('Updated:', post);
}

// DELETE
async function deletePost(id) {
    await Post.findByIdAndDelete(id);
    console.log('Post deleted');
}
```

### Express + MongoDB Example

```javascript
const express = require('express');
const connectDB = require('./db');
const Post = require('./models/Post');

const app = express();
app.use(express.json());

// Connect to database
connectDB();

// GET all posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .limit(20);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET single post
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        // Increment views
        post.views += 1;
        await post.save();
        
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CREATE post
app.post('/api/posts', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// UPDATE post
app.put('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE post
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Search posts
app.get('/api/posts/search', async (req, res) => {
    try {
        const { q } = req.query;
        const posts = await Post.find({
            $or: [
                { title: { $regex: q, $options: 'i' } },
                { content: { $regex: q, $options: 'i' } }
            ]
        });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

## PostgreSQL (SQL)

### Installation

**Option 1: PostgreSQL Cloud (ElephantSQL - Free)**
1. Go to https://www.elephantsql.com/
2. Create free account
3. Create instance
4. Get connection URL

**Option 2: Local Installation**
- Download from https://www.postgresql.org/download/

### Connecting with pg

```bash
npm install pg dotenv
```

Create `.env`:
```
DATABASE_URL=postgresql://username:password@localhost:5432/mydb
```

```javascript
// db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = pool;
```

### Creating Tables

```javascript
const pool = require('./db');

async function createTables() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            content TEXT NOT NULL,
            author VARCHAR(50) DEFAULT 'Anonymous',
            published BOOLEAN DEFAULT false,
            views INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log('Table created!');
}

createTables();
```

### CRUD Operations

```javascript
const pool = require('./db');

// CREATE
async function createPost(title, content, author) {
    const result = await pool.query(
        'INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *',
        [title, content, author]
    );
    return result.rows[0];
}

// READ - All
async function getAllPosts() {
    const result = await pool.query(
        'SELECT * FROM posts ORDER BY created_at DESC'
    );
    return result.rows;
}

// READ - One
async function getPostById(id) {
    const result = await pool.query(
        'SELECT * FROM posts WHERE id = $1',
        [id]
    );
    return result.rows[0];
}

// UPDATE
async function updatePost(id, title, content) {
    const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
        [title, content, id]
    );
    return result.rows[0];
}

// DELETE
async function deletePost(id) {
    await pool.query('DELETE FROM posts WHERE id = $1', [id]);
}
```

### Express + PostgreSQL Example

```javascript
const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

// GET all posts
app.get('/api/posts', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM posts ORDER BY created_at DESC LIMIT 20'
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET single post
app.get('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // Increment views
        await pool.query(
            'UPDATE posts SET views = views + 1 WHERE id = $1',
            [id]
        );
        
        const result = await pool.query(
            'SELECT * FROM posts WHERE id = $1',
            [id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CREATE post
app.post('/api/posts', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        
        const result = await pool.query(
            'INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *',
            [title, content, author || 'Anonymous']
        );
        
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// UPDATE post
app.put('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        
        const result = await pool.query(
            'UPDATE posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
            [title, content, id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE post
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await pool.query(
            'DELETE FROM posts WHERE id = $1 RETURNING id',
            [id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000);
```

## Challenge: Full Blog API with Database

Upgrade your blog API from Lesson 12 to use a real database!

**Requirements:**
- Choose MongoDB OR PostgreSQL
- Implement all CRUD operations
- Add pagination (`?page=1&limit=10`)
- Add search functionality
- Add filtering by author
- Add sorting (by date, views, etc.)
- Handle all errors properly

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [node-postgres Documentation](https://node-postgres.com/)

## Key Takeaways

✅ Databases persist data permanently
✅ MongoDB is flexible and document-based
✅ PostgreSQL is structured and relational
✅ Always validate data before saving
✅ Use environment variables for connection strings
✅ Handle database errors gracefully

---

**Next:** In Lesson 14, you'll add authentication to secure your API!
