const clockH1 = document.getElementById("clock");

function displayTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  clockH1.textContent = ` ${hours} : ${minutes} : ${seconds}`;
}
displayTime();

setInterval(displayTime, 1000);
