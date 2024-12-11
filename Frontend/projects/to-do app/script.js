document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Add task event listener
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";  // Clear input field after adding task
      }
    });
  
    // Add task to the list
    function addTask(taskText) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete">Delete</button>
      `;
  
      // Mark task as completed
      li.querySelector('.task-text').addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      // Delete task
      li.querySelector('.delete').addEventListener('click', () => {
        li.remove();
      });
  
      taskList.appendChild(li);
    }
  });
  