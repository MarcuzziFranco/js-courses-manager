import { checkCredentialUser } from "./serviceLogin.js";
console.log("hola");

let $input_name = document.getElementById("userName");
let $input_password = document.getElementById("userPassword");
let $btn_login = document.getElementById("btn_login");

console.log($input_name);
console.log($input_password);

$btn_login.addEventListener("click", (event) => {
  if (checkCredentialUser($input_name.value, $input_password.value)) {
    window.location.href = "Pages/loadCourses.html";
  }
});
