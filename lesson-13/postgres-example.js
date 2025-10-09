const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://localhost:5432/mydb'
});

// CREATE table
async function createTable() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            content TEXT NOT NULL,
            author VARCHAR(50) DEFAULT 'Anonymous',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
}

// CREATE post
async function createPost(title, content) {
    const result = await pool.query(
        'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
        [title, content]
    );
    return result.rows[0];
}

// READ posts
async function getPosts() {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    return result.rows;
}

// UPDATE post
async function updatePost(id, title, content) {
    const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
        [title, content, id]
    );
    return result.rows[0];
}

// DELETE post
async function deletePost(id) {
    await pool.query('DELETE FROM posts WHERE id = $1', [id]);
}
