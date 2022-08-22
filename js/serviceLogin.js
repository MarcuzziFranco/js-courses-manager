import { users } from "./MOCK/users.js";

export const checkCredentialUser = (username, password) => {
  console.log("login service");
  //console.log(users);

  return (
    users.find(
      (user) => user.userName == username && user.password == password
    ) !== undefined
  );
};
