document.addEventListener('DOMContentLoaded', (event) => {
    const newDayInput = document.getElementById('newDay');
    const newTodoInput = document.getElementById('newTodo');
    const addTodoButton = document.getElementById('addTodoButton');
    const todoList = document.getElementById('todoList');

    addTodoButton.addEventListener('click', addTodo);

    function addTodo() {
        const dayText = newDayInput.value.trim();
        const todoText = newTodoInput.value.trim();
        if (dayText === '' || todoText === '') {
            alert('Please enter both day and todo');
            return;
        }

        const todoItem = document.createElement('li');
        todoItem.textContent = `${dayText}: ${todoText}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(deleteButton);
        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        todoList.appendChild(todoItem);
        newDayInput.value = '';
        newTodoInput.value = '';
    }
});