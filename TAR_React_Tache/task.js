// New task management functions
let tasks = [];

function renderTasks() {
  const taskListElement = document.getElementById('taskList');
  if (taskListElement) {
    taskListElement.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(index));
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editTask(index));
      li.appendChild(deleteButton);
      li.appendChild(editButton);
      taskListElement.appendChild(li);
    });
  }
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  if (taskInput && taskInput.value.trim() !== '') {
    tasks.push(taskInput.value.trim());
    renderTasks();
    saveTasksToLocalStorage();
    taskInput.value = '';
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  saveTasksToLocalStorage();
}

function editTask(index) {
  const updatedTask = prompt('Edit Task:', tasks[index]);
  if (updatedTask !== null) {
    tasks[index] = updatedTask.trim();
    renderTasks();
    saveTasksToLocalStorage();
  }
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}

loadTasksFromLocalStorage();
updateDisplay();