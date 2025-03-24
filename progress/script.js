function addTask() {
    let input = document.getElementById("goalInput");
    let taskText = input.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById("taskList");

        // Create task item
        let task = document.createElement("div");
        task.classList.add("task");

        // Task Text
        let span = document.createElement("span");
        span.textContent = taskText;

        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = function() {
            taskList.removeChild(task);
        };

        // Append elements
        task.appendChild(span);
        task.appendChild(deleteBtn);
        taskList.appendChild(task);

        // Clear input field
        input.value = "";
    }
}
