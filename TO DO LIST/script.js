// Get references to HTML elements
const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
const taskList = document.getElementById('taskList');
const container = document.querySelector('.container');
const calculator = document.querySelector('.calculator');
const addTask = document.querySelector('.addTask');

// Add event listeners for adding tasks
btn.addEventListener('click', addTaskToList);
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    addTaskToList(e);
  }
});

// Function to add a new task to the list
function addTaskToList(e) {
  const newTask = input.value.trim();
  if (newTask !== '') {
    // Create a new list item
    const listItem = document.createElement('li');

    // Create a checkbox for marking tasks as completed
    const checkbox = document.createElement('i');
    checkbox.className = 'far fa-square'; // Empty checkbox icon
    checkbox.addEventListener('click', toggleTask);

    // Create a delete icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt delete-icon';
    deleteIcon.addEventListener('click', deleteTask);

    // Set the task text and append the checkbox and delete icon
    listItem.textContent = newTask;
    listItem.appendChild(checkbox);
    listItem.appendChild(deleteIcon);

    // Add the new task to the list
    taskList.appendChild(listItem);

    // Clear the input field
    input.value = '';

    // Check if the number of tasks exceeds 10
    if (taskList.childElementCount > 10) {
      // Adjust container height and font size
      container.style.minHeight = '200vh';
      calculator.style.minHeight = '100%';
      addTask.style.height = '30rem';
      taskList.style.fontSize = '24px';
    }
  }
}

// Function to toggle the completion status of a task
function toggleTask() {
  const checkbox = this;
  checkbox.classList.toggle('fa-square'); // Toggle checkbox icon
  checkbox.classList.toggle('fa-check-square'); // Toggle checkbox icon
  const listItem = checkbox.parentElement;
  listItem.classList.toggle('completed');
}

// Function to delete a task
function deleteTask() {
  const listItem = this.parentElement;
  taskList.removeChild(listItem);
}
