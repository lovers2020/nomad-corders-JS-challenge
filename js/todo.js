const toDo = document.querySelector(".input-todolist input");
const toDoForm = document.querySelector(".input-todolist");
const addTodoList = document.querySelector(".todo-list");
const toDos = [];

function saveTodos() {
  localStorage.setItem("todos", toDos);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function inputToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = newTodo;
  li.appendChild(span);

  button.classList.add("material-symbols-outlined");
  button.textContent = "delete";
  button.addEventListener("click", deleteToDo);
  li.append(button);

  addTodoList.appendChild(li);
}

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = toDo.value;
  toDos.push(newTodo);
  toDo.value = "";
  inputToDo(newTodo);
  saveTodos();
});
