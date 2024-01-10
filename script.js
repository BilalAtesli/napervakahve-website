const user = "admin";
const password = "admin";

const buttonElement = document.querySelector("#login");
const warningElement = document.querySelector("#warning");
buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  const enteredUsername = document.querySelector("#username").value;
  const enteredPassword = document.querySelector("#password").value;
  if (enteredUsername === user && enteredPassword === password) {
    window.location.href = "index.html";
  } else {
    warningElement.classList.add("warning");
    warningElement.innerHTML = "<p id='warning'>Şifre veya Kullanıcı adı yanlış !</p>";
  }
});
