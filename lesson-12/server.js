const express = require('express');
const app = express();

app.use(express.json());

let posts = [
    { id: 1, title: 'First Post', content: 'Hello World' },
    { id: 2, title: 'Second Post', content: 'Learning Express' }
];

// GET all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// GET single post
app.get('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: 'Not found' });
    res.json(post);
});

// CREATE post
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content required' });
    }
    const post = { id: posts.length + 1, title, content };
    posts.push(post);
    res.status(201).json(post);
});

// UPDATE post
app.put('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: 'Not found' });
    Object.assign(post, req.body);
    res.json(post);
});

// DELETE post
app.delete('/api/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Not found' });
    posts.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));
