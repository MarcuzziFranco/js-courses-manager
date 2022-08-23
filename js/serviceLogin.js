import { users } from "./MOCK/users.js";
import {
  saveUserDataLocalStorage,
  USER_NAME,
  USER_LAST_NAME,
  USER_TYPE,
} from "./serviceLocalStorage.js";

export const checkCredentialUser = (username, password) => {
  console.log("login service");

  const userLogin = users.find(
    (user) => user.userName == username && user.password == password
  );
  if (userLogin !== undefined) {
    saveUserDataLocalStorage(userLogin);
    return userLogin.typeUser;
  }

  return null;
};

export const logout = () => {
  window.localStorage.removeItem(USER_NAME);
  window.localStorage.removeItem(USER_LAST_NAME);
  window.localStorage.removeItem(USER_NAME);
  window.location.href = "http://127.0.0.1:5500/";
};
