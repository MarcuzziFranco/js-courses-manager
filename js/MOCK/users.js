export const typeUser = Object.freeze({
  ADMINISTRADOR: 1,
  STUDEN: 2,
});
const user = {
  userName: "",
  password: "",
  typeUser: 0,
};

export const users = [
  {
    userName: "Franco",
    password: "qwert",
    typeUser: typeUser.ADMINISTRADOR,
  },
  {
    userName: "Juan",
    password: "1234",
    typeUser: typeUser.STUDEN,
  },
];
