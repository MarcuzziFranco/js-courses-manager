let countCoursesAdd = 0;
let courses = [];

//SERVICIOS
//Obtiene todos los cursos.
const getCourses = () => {
  for (let i = 0; i < courses.length; i++) {
    const element = courses[i];
    console.log(element);
  }
};

//Obtiene un curso especifico.
const getCourse = (id) => {
  return courses.find((element) => element.id === id);
};

//Permite agregar un curso a la lista.
const addCourses = (newCourse) => {
  let newId = courses.length;
  newCourse.id = newId;
  if (courses.length > 0) newId = courses[courses.length - 1].id + 1;
  courses.push(newCourse);
};

//Permite eliminar un curos de la lista.
const deleteCourse = (id) => {
  let deleteCourse = getCourse(id);
  courses.splice(deleteCourse.id, 1);
};

//Permite actualizar un curso.
const updateCourse = (course) => {
  const indexElementUpdate = courses.findIndex(
    (element) => element.id === course.id
  );
  courses[indexElementUpdate] = course;
};

// Logica ingreso Cursos
const createCourses = (name, vacancies) => {
  //Creamos nuevo objeto curso.
  let newCourse = {
    name: name,
    vacancies: vacancies,
    inscriptions: 0,
  };

  addCourses(newCourse);
};
//////////////////////////////
//////////////////////////////
//////////////////////////////

//Obtener componentes HTML.

let $tittle = document.getElementById("tittle_course");
let $vacacies = document.getElementById("vacacies_course");
let $btn_create = document.getElementById("btn_createCourse");
let $table_container = document.getElementById("table_container");

console.log($tittle);
console.log($vacacies);

$btn_create.addEventListener("click", (event) => {
  console.log($tittle.value);
  console.log($vacacies.value);

  createCourses($tittle.value, $vacacies.value);
  console.log(courses);
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
