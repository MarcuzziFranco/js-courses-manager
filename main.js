let countCoursesAdd = 0;
let courses = [];

let course = {
  id: 5,
  name: "Algebra",
  vacancies: 16,
  inscriptions: 7,
};

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
const createCourses = () => {
  countCoursesAdd = Number.parseInt(
    prompt("Ingrese la cantidad de cursos a ingresar en el sistema")
  );

  for (let i = 0; i < countCoursesAdd; i++) {
    //Creamos nuevo objecto curso.
    let newCourse = {
      name: prompt("Ingrese el nombre del curso " + (i + 1)),
      vacancies: prompt("Ingrese el cupo para el curso"),
      inscriptions: 0,
    };

    addCourses(newCourse);
  }
};

createCourses();
getCourses();

console.log(courses);
