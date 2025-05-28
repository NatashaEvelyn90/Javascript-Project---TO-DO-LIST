
const taskInput = document.getElementById("itemsNeeded");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addTasks");
const removeBtn = document.getElementById("resetTasks");
const restartBtn = document.getElementById("restart");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create task item
    const li = document.createElement("li");
    li.className = "taskItem";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    checkbox.addEventListener("change", () => {
        span.classList.toggle("completed", checkbox.checked);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input
});

// Remove last task
removeBtn.addEventListener("click", () => {
    if (taskList.lastChild) {
        taskList.removeChild(taskList.lastChild);
    }
});

// Reload page
restartBtn.addEventListener("click", () => {
    window.location.reload();
});
