let courses = [
  {
    id: 0,
    name: "Logica",
    vacancies: 20,
    inscriptions: 5,
  },
  {
    id: 1,
    name: "Programacion",
    vacancies: 25,
    inscriptions: 0,
  },
  {
    id: 2,
    name: "Introduccion sitemas",
    vacancies: 40,
    inscriptions: 2,
  },
  {
    id: 3,
    name: "Ingles",
    vacancies: 20,
    inscriptions: 5,
  },
  {
    id: 4,
    name: "Organizacion computadoras",
    vacancies: 30,
    inscriptions: 10,
  },
  {
    id: 5,
    name: "Algebra",
    vacancies: 16,
    inscriptions: 7,
  },
];

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
const addCourses = (name) => {
  const newId = courses[courses.length - 1].id + 1;
  console.log(newId);
  courses.push({
    id: newId,
    name: name,
    vacancies: 0,
    inscriptions: 0,
  });
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

//Zona Testeo.
getCourses();
addCourses("Electronica 1");
addCourses("Electronica 2");
deleteCourse(2);
deleteCourse(1);
getCourses();
console.log("**************");
updateCourse({
  id: 5,
  name: "Electronica 3",
  vacancies: 22,
  inscriptions: 3,
});
getCourses();
