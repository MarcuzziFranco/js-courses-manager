//Ejemplo de un objecto curso.
const Courses = {
  id: 0,
  couserName: "Matematica",
  vacancies: 20,
  inscriptions: 5,
};

const getCourses = () => {
  //Logica que recupera la lista de cursos.
  for (let i = 0; i < 10; i++) {
    console.log("Curso numero:" + i);
  }
};

const getCourse = (id) => {
  //Logica para buscar un curso en particular.
  console.log("Curso numero:" + index);
};

const addCourses = (couserName) => {
  //Logica para agregar un curso a una lista de cursos.
  console.log(`Agreado el nuevo curso: ${couserName}`);
};

const deleteCourse = (id) => {
  //Logica para buscar un curso por su id y eliminarlo.
  console.log(`Eliminado curso: ${couserName}`);
};

const updateCourse = (id) => {
  //Logica para buscar un curso por su id y actualizar su infomacion
  console.log(`Eliminado curso: ${couserName}`);
};
