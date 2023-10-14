const loginForm = document.querySelector(".login");
const submitBtn = document.getElementById("submit");
const inputId = document.querySelector(".login input:first-child");
const inputPw = document.querySelector(".login input:last-child");

const HIDDEN_CLASS = "hidden";

if (localStorage.getItem("id") == null) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("id", inputId.value);
    localStorage.setItem("pw", inputPw.value); 
    loginForm.classList.add(HIDDEN_CLASS);
  });
}
