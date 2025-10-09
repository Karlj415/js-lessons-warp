const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span>${todo.text}</span>
            <button>Delete</button>
        `;
        
        li.querySelector('input').addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        });
        
        li.querySelector('button').addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });
        
        todoList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    if (input.value.trim()) {
        todos.push({ text: input.value, completed: false });
        input.value = '';
        saveTodos();
        renderTodos();
    }
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

renderTodos();
