const todoList = [];

function addTask() {
  const task = document.getElementById("taskInput").value;
  todoList.push({
    text: task
  });

  renderTaskList();
}

function renderTaskList() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = todoList.map(task => `
    <li>
      ${task.text}
    </li>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTaskList);
