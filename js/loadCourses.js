import { createCourses, getCoursesList } from "./servicesCourse.js";

let $tittle = document.getElementById("tittle_course");
let $vacacies = document.getElementById("vacacies_course");
let $btn_create = document.getElementById("btn_createCourse");

$btn_create.addEventListener("click", (event) => {
  createCourses($tittle.value, $vacacies.value);
  clearInput();

  generateTableCourses();
});

function clearInput() {
  $tittle.value = "";
  $vacacies.value = 1;
}

function generateTableCourses() {
  let tbody = document.getElementById("tbody");

  let row = document.createElement("tr");
  let courses = getCoursesList();
  let count = courses.length - 1;

  for (const key in courses[count]) {
    let cell = document.createElement("td");
    if (key !== "id") {
      let celldata = document.createTextNode(courses[count][key]);
      cell.appendChild(celldata);
      row.appendChild(cell);
    }
  }

  tbody.appendChild(row);
}
