const loginForm = document.querySelector(".login");
const submitBtn = document.querySelector(".login button");
const inputId = document.querySelector(".login input");
const welcomeMessage = document.querySelector(".welcome-message span");

const HIDDEN_CLASS = "hidden";

function displayLoginMessage() {
  loginForm.classList.add(HIDDEN_CLASS);
  document.querySelector(".welcome-message").classList.remove(HIDDEN_CLASS);
  welcomeMessage.textContent = `Hello! ${localStorage.getItem("id")}`;

  const displayToDoList = document.querySelector(".input-todolist");
  displayToDoList.classList.remove(HIDDEN_CLASS);
}

if (localStorage.getItem("id") == null) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("id", inputId.value);
    displayLoginMessage();
  });
} else {
  displayLoginMessage();
}
