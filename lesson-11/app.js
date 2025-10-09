// Node.js Fundamentals Example
const fs = require('fs').promises;

// Read file
async function readFile(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        console.log('File contents:', data);
    } catch (err) {
        console.error('Error reading file:', err.message);
    }
}

// Write file
async function writeFile(filename, content) {
    try {
        await fs.writeFile(filename, content);
        console.log('File written successfully!');
    } catch (err) {
        console.error('Error writing file:', err.message);
    }
}

// List files in directory
async function listFiles(dir) {
    try {
        const files = await fs.readdir(dir);
        console.log('Files:', files);
    } catch (err) {
        console.error('Error listing files:', err.message);
    }
}

// Example usage
writeFile('test.txt', 'Hello from Node.js!');
readFile('test.txt');
listFiles('.');
