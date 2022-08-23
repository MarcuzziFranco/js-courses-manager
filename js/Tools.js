import { getUserDataLocalStorage, USER_TYPE } from "./serviceLocalStorage.js";

export function checkValidUser(typeUser) {
  if (getUserDataLocalStorage(USER_TYPE) !== String(typeUser)) {
    window.localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/";
  }
}

export function generateTableCourses(courses) {
  if (courses != null) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < courses.length; i++) {
      let row = document.createElement("tr");
      for (const key in courses[i]) {
        let cell = document.createElement("td");
        if (key !== "id") {
          let celldata = document.createTextNode(courses[i][key]);
          cell.appendChild(celldata);
          row.appendChild(cell);
        }
      }

      tbody.appendChild(row);
    }
  }
}

export function logout() {
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_LAST_NAME);
  localStorage.removeItem(USER_TYPE);
  window.location.href = "http://127.0.0.1:5500/";
}
