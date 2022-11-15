const allCheckbox = document.querySelector("#all");
const openCheckbox = document.querySelector("#open");
const doneCheckbox = document.querySelector("#done");

const addButton = document.querySelector("#add-button");
const deleteButton = document.querySelector("#delete-button");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Nur eine Checkbox anklicken!

function toggle(checkbox, otherCheckbox, otherCheckbox2) {
  if (checkbox || otherCheckbox || otherCheckbox2) {
    otherCheckbox.checked = false;
  }
}

allCheckbox.addEventListener("change", function () {
  toggle(allCheckbox, openCheckbox);
});
allCheckbox.addEventListener("change", function () {
  toggle(allCheckbox, doneCheckbox);
});

openCheckbox.addEventListener("change", function () {
  toggle(openCheckbox, doneCheckbox);
});
openCheckbox.addEventListener("change", function () {
  toggle(openCheckbox, allCheckbox);
});

doneCheckbox.addEventListener("change", function () {
  toggle(doneCheckbox, allCheckbox);
});
doneCheckbox.addEventListener("change", function () {
  toggle(doneCheckbox, openCheckbox);
});

// Todo Liste hinzufügen!

function addTodo() {
  const newTodoText = todoInput.value;
  if (newTodoText.length < 5) {
    return;
  }

  todoInput.value = "";

  const newTodoLi = document.createElement("li");
  newTodoLi.innerText = newTodoText;

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  newTodoLi.appendChild(checkBox);

  todoList.appendChild(newTodoLi);
}
addButton.addEventListener("click", addTodo);

// All, Open und Done mit der liste verknüpft!

function listConnect() {
  if (list.checked === true) {
  }
}
