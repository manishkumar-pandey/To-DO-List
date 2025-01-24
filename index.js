function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (!taskValue) {
      alert("Please enter a task!");
      return;
  }
  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `
      <span>${taskValue}</span>
      <div>
          <button class="complete-btn" onclick="markComplete(this)">Complete</button>
          <button class="uncomplete-btn" onclick="markUncomplete(this)">Uncomplete</button>
          <button class="remove-btn" onclick="removeTask(this)">Remove</button>
      </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function markComplete(button) {
  const li = button.parentElement.parentElement;
  const uncompleteBtn = button.nextElementSibling;

  li.classList.add("completed");
  button.innerText = "Done"; // Change button text to "Done"
  button.disabled = true; // Disable the "Complete" button
  uncompleteBtn.style.display = "none"; // Hide "Uncomplete" button
}

function markUncomplete(button) {
  const li = button.parentElement.parentElement;
  const completeBtn = button.previousElementSibling;

  li.classList.remove("completed");
  button.innerText = "Failed"; // Change button text to "Failed"
  button.disabled = true; // Disable the "Uncomplete" button
  completeBtn.style.display = "none"; // Hide "Complete" button
}

function removeTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}
