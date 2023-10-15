const loginForm = document.querySelector(".login");
const submitBtn = document.getElementById("submit");
const inputId = document.querySelector(".login input:first-child");
const welcomeMessage = document.querySelector(".welcome-message span");

const HIDDEN_CLASS = "hidden";

if (localStorage.getItem("id") == null) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("id", inputId.value);
    loginForm.classList.add(HIDDEN_CLASS);
    welcomeMessage.textContent = `Hello! ${localStorage.getItem("id")}`;
  });
} else {
  loginForm.classList.add(HIDDEN_CLASS);
  welcomeMessage.textContent = `Hello! ${localStorage.getItem("id")}`;
}
