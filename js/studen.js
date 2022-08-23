import {
  getUserDataLocalStorage,
  USER_NAME,
  USER_LAST_NAME,
} from "./serviceLocalStorage.js";
import { logout } from "./serviceLogin.js";
import { typeUser } from "./MOCK/users.js";
import { checkValidUser, generateTableCourses } from "./Tools.js";
import { getCoursesList } from "./servicesCourse.js";

checkValidUser(typeUser.STUDEN);

function setInfoDom() {
  let $userName = document.getElementById("userName");
  let $userLastName = document.getElementById("userLastName");

  $userName.innerText = getUserDataLocalStorage(USER_NAME);
  $userLastName.innerText = getUserDataLocalStorage(USER_LAST_NAME);
}

let $buttonLogout = document.getElementById("logout");
$buttonLogout.addEventListener("click", (event) => {
  logout();
});

setInfoDom();

generateTableCourses(getCoursesList());
