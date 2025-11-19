const newTaskInput = document.getElementById('new-task-input');
const multiTaskInput = document.getElementById('multi-task-input');
const addTaskButton = document.getElementById('add-task-btn');
const addMultipleButton = document.getElementById('add-multiple-btn');
const taskList = document.getElementById('task-list');

const lightBtn = document.getElementById('light-theme-btn');
const darkBtn = document.getElementById('dark-theme-btn');

addTaskButton.addEventListener('click', addTask);
addMultipleButton.addEventListener('click', addMultipleTasks);
lightBtn.addEventListener('click', () => document.body.classList.remove("dark"));
darkBtn.addEventListener('click', () => document.body.classList.add("dark"));

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") return alert("Digite uma tarefa!");

    createTask(taskText);
    newTaskInput.value = "";
}

function addMultipleTasks() {
    const lines = multiTaskInput.value.trim().split("\n");
    if (multiTaskInput.value.trim() === "") return alert("Digite mais de uma tarefa!");

    lines.forEach(task => {
        if (task.trim() !== "") createTask(task.trim());
    });

    multiTaskInput.value = "";
}

function createTask(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        li.classList.add("remove");
        setTimeout(() => li.remove(), 200);
    });

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}