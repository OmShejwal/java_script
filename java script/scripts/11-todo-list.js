const todoList = [
  { name: 'make dinner', dueDate: '2022-12-22' },
  { name: 'wash dishes', dueDate: '2022-12-22' }
];

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name,dueDate}= todoObject;
    const html = `
      <div> ${name} </div>
       <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      "class="delete-button">Delete</button>
      `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const nameInput = document.querySelector('.js-name-input');
  const dueDateInput = document.querySelector('.js-due-date-input');
  const name = nameInput.value;
  const dueDate = dueDateInput.value;

  if (name.trim() !== '' && dueDate.trim() !== '') {
    todoList.push({ name: name, dueDate: dueDate });
    nameInput.value = '';
    dueDateInput.value = '';
    renderTodoList();
  }
}

renderTodoList();
