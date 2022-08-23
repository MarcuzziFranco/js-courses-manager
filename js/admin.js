import { typeUser } from "./MOCK/users.js";
import { createCourses, getCoursesList } from "./servicesCourse.js";
import { checkValidUser, generateTableCourses } from "./Tools.js";
import { logout } from "./serviceLogin.js";

checkValidUser(typeUser.ADMINISTRADOR);
generateTableCourses(getCoursesList());
let $tittle = document.getElementById("tittle_course");
let $vacacies = document.getElementById("vacacies_course");
let $btn_create = document.getElementById("btn_createCourse");

$btn_create.addEventListener("click", (event) => {
  createCourses($tittle.value, $vacacies.value);
  clearInput();

  generateTableCourses(getCoursesList());
});

let $buttonLogout = document.getElementById("logout");
$buttonLogout.addEventListener("click", (event) => {
  logout();
});

function clearInput() {
  $tittle.value = "";
  $vacacies.value = 1;
}
