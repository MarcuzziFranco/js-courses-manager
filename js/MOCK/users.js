export const typeUser = Object.freeze({
  ADMINISTRADOR: 1,
  STUDEN: 2,
});

export const users = [
  {
    userName: "Franco",
    lastName: "Marcuzzi",
    password: "qwert",
    typeUser: typeUser.ADMINISTRADOR,
  },
  {
    userName: "Patricio",
    lastName: "Estrella",
    password: "1234",
    typeUser: typeUser.STUDEN,
  },
];
