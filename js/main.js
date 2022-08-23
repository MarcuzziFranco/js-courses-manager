import { checkCredentialUser } from "./serviceLogin.js";
import { typeUser } from "./MOCK/users.js";

let $input_name = document.getElementById("userName");
let $input_password = document.getElementById("userPassword");
let $btn_login = document.getElementById("btn_login");
let $error_login = document.getElementById("error-login");

SetViewErrorLogin(false);

$btn_login.addEventListener("click", (event) => {
  LoginUser();
});

$input_password.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    LoginUser();
  }
});

function LoginUser() {
  let userType = checkCredentialUser($input_name.value, $input_password.value);
  console.log(userType);
  if (userType) {
    if (userType === typeUser.ADMINISTRADOR)
      window.location.href = "Pages/AdminCourses.html";
    else {
      window.location.href = "Pages/StudenCourses.html";
    }
  } else {
    SetViewErrorLogin(true);
  }
}
function SetViewErrorLogin(show) {
  show
    ? ($error_login.style.display = "block")
    : ($error_login.style.display = "none");
}
