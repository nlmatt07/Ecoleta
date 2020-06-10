import express from "express";
const app = express();

const users = [
  "Diego",
  "Mateus",
  "Pedro",
  "Thomas",
  "Hamilton ",
  "Ana",
  "Julia",
  "Brenda",
  "Maria",
  "Anny",
];

app.get("/users", (request, response) => {
  console.log("Hello World");

  return response.json(users);
});

app.get("/users/:id", (request, response) => {
  const id = request.params.id;

  const user = users[id];

  return response.json(users);
});

app.post("/users", (request, response) => {
  const users = {
    nome: "Mateus",
    email: "nlmatt07@hotmail.com",
  };

  return response.json(users);
});

app.listen(3333, () => {
  console.log("Rodando na porta 3333");
});
