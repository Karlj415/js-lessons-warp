const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb');

// Define schema
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: 'Anonymous' }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

// CREATE
async function createPost() {
    const post = new Post({
        title: 'My First Post',
        content: 'Hello, MongoDB!'
    });
    await post.save();
    console.log('Post created:', post);
}

// READ
async function getPosts() {
    const posts = await Post.find().sort({ createdAt: -1 });
    console.log('Posts:', posts);
}

// UPDATE
async function updatePost(id) {
    const post = await Post.findByIdAndUpdate(
        id,
        { title: 'Updated Title' },
        { new: true }
    );
    console.log('Updated:', post);
}

// DELETE
async function deletePost(id) {
    await Post.findByIdAndDelete(id);
    console.log('Deleted');
}
