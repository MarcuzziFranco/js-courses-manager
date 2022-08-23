import {
  saveCourseListLocalStorage,
  getCoursesListLocalStorage,
} from "./serviceLocalStorage.js";

let courses = [];

//SERVICIOS
//Obtiene todos los cursos.
export const getCourses = () => {
  for (let i = 0; i < courses.length; i++) {
    const element = courses[i];
    console.log(element);
  }
};

export const getCoursesList = () => {
  courses = getCoursesListLocalStorage();
  return courses !== null ? courses : [];
};

//Obtiene un curso especifico.
export const getCourse = (id) => {
  return courses.find((element) => element.id === id);
};

//Permite agregar un curso a la lista.
export const addCourses = (newCourse) => {
  courses = getCoursesList();
  let newId = courses.length;
  newCourse.id = newId;
  if (courses.length > 0) newId = courses[courses.length - 1].id + 1;
  courses.push(newCourse);

  saveCourseListLocalStorage(courses);
  courses = getCoursesList();
};

//Permite eliminar un curos de la lista.
export const deleteCourse = (id) => {
  let deleteCourse = getCourse(id);
  courses.splice(deleteCourse.id, 1);
};

//Permite actualizar un curso.
export const updateCourse = (course) => {
  const indexElementUpdate = courses.findIndex(
    (element) => element.id === course.id
  );
  courses[indexElementUpdate] = course;
};

// Logica ingreso Cursos
export const createCourses = (name, vacancies) => {
  //Creamos nuevo objeto curso.
  let newCourse = {
    name: name,
    vacancies: vacancies,
    inscriptions: 0,
  };

  addCourses(newCourse);
};
