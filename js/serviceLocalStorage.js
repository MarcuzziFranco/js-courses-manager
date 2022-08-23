export const USER_NAME = "LS_USER_NAME";
export const USER_LAST_NAME = "LS_LAST_NAME";
export const USER_TYPE = "LS_TYPE";
export const LIST_COURSES = "LS_COURSES";

export function saveUserDataLocalStorage(validUser) {
  localStorage.setItem(USER_NAME, validUser.userName);
  localStorage.setItem(USER_LAST_NAME, validUser.lastName);
  localStorage.setItem(USER_TYPE, validUser.typeUser);
}

export function saveCourseListLocalStorage(courses) {
  localStorage.setItem(LIST_COURSES, JSON.stringify(courses));
}

export function getCoursesListLocalStorage() {
  return JSON.parse(localStorage.getItem(LIST_COURSES));
}

export function getUserDataLocalStorage(key) {
  return localStorage.getItem(key);
}
