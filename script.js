// Nur eine Checkbox anklicken!

const allCheckbox = document.querySelector("#all");
const openCheckbox = document.querySelector("#open");
const doneCheckbox = document.querySelector("#done");

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

const btnAddTodo = document.querySelector("#btn-add-todo");

btnAddTodo.addEventListener("click", addTodo);

function addTodo(event, randomNumber) {
  const todoDescription = document.querySelector("#todo-description").value;
  // const todoDescription = todoField.value;
  const list = document.querySelector("#todos-list");

  const listEl = document.createElement("li");
  const listBox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listEl.append("input");
  // const checkbox = document.createElement("input");

  // list.append(checkbox);
  // const listBr = document.createElement("br");
  // listEl.innerText = todoDescription;
  list.append(listEl);
  //list.append(listBr);
}

// All, Open und Done mit der liste verknüpft!

function listConnect() {
  if (list.checked === true) {
  }
}
