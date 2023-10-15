const toDo = document.querySelector(".input-todolist input");
const toDoForm = document.querySelector(".input-todolist");
const addTodoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function isToDoListEmpty() {
  console.log(toDos);
  const addEmptyText = document.querySelector(".todo-list p");

  if (toDos[0] !== undefined) {
    addEmptyText.classList.add("hidden");
  } else {
    addEmptyText.classList.remove("hidden");
  }
}

function saveToDos() {
  isToDoListEmpty();
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function inputToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = newTodo.text;
  li.appendChild(span);

  button.classList.add("material-symbols-outlined");
  button.textContent = "delete";
  button.addEventListener("click", deleteToDo);

  li.id = newTodo.id;
  li.append(button);

  addTodoList.appendChild(li);
}

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = toDo.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  toDo.value = "";
  inputToDo(newTodoObj);
  saveToDos();
});

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(inputToDo);
}


isToDoListEmpty();