const allCheckbox = document.querySelector("#all");
const openCheckbox = document.querySelector("#open");
const doneCheckbox = document.querySelector("#done");

const addButton = document.querySelector("#add-button");
const deleteButton = document.querySelector("#delete-button");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Filtern der Optionen

/*function toggle(checkbox, otherCheckbox, otherCheckbox2) {
  if (checkbox || otherCheckbox || otherCheckbox2) {
    otherCheckbox.checked = false;
  }
}

function filterDone() {
  for (let li of todoList.children) {
    if (!li.querySelector("input").checked) {
      li.hidden = true;
    } else {
      li.hidden = false;
    }
  }
}

function filterOpen() {
  for (let li of todoList.children) {
    if (li.querySelector("input").checked) {
      li.hidden = true;
    } else {
      li.hidden = false;
    }
  }
}*/

function filterTodos(status = "open") {
  for (let li of todoList.children) {
    let condition = li.querySelector("input").checked;

    if (status === "done") {
      condition = !condition;
    }

    if (condition) {
      li.hidden = true;
    } else {
      li.hidden = false;
    }
  }
}

function removeFilter() {
  for (let li of todoList.children) {
    li.hidden = false;
  }
}

allCheckbox.addEventListener("change", removeFilter);

openCheckbox.addEventListener("change", () => filterTodos("open"));

doneCheckbox.addEventListener("change", () => filterTodos("done"));

/*allCheckbox.addEventListener("change", function () {
  //toggle(allCheckbox, openCheckbox);
  //
});*/
/*allCheckbox.addEventListener("change", function () {
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
});*/

// Todo Liste hinzufügen!

function addTodo() {
  const newTodoText = todoInput.value;
  if (newTodoText.length < 5) {
    return;
  }

  todoInput.value = "";

  const newTodoLi = document.createElement("li");

  const label = document.createElement("label");
  label.innerText = newTodoText;
  label.className = "meine-klasse";

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  newTodoLi.append(checkBox, label);

  todoList.appendChild(newTodoLi);
}
addButton.addEventListener("click", addTodo);

// löschen der erledigten Todos

function deleteDoneTodos() {
  for (let li of todoList.children) {
    if (li.querySelector("input").checked) {
      li.remove();
    }
  }
}

deleteButton.addEventListener("click", deleteDoneTodos);
