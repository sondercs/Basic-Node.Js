const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso V1", "Curso V2", "Curso V3"]);
  // localhost:3333/courses?page=1&order=desc
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso V4", "Curso V5", "Curso V6"]);
  // localhost:3333/courses

  /* Exemplo de Body
    {
        "name": "João",
        "age": "16",
        "email": "jp@gmail.com"
    }
  */
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso V7", "Curso V8", "Curso V9"]);
  // localhost:3333/courses/1
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso V10", "Curso V11", "Curso V12"]);
  // localhost:3333/courses/2
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso V4", "Curso V5"]);
  // localhost:3333/courses/3
});

app.listen(3333);
// localhost:3333
