const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.get("/courses", (request, response) => {
  return response.json(["Curso V1", "Curso V2", "Curso V3"]);
  // localhost:3333/courses
});

app.post("/courses", (request, response) => {
  return response.json(["Curso V4", "Curso V5", "Curso V6"]);
  // localhost:3333/courses
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso V7", "Curso V8", "Curso V9"]);
  // localhost:3333/courses/:id
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso V10", "Curso V11", "Curso V12"]);
  // localhost:3333/courses/:id
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso V4", "Curso V5"]);
  [
    // localhost:3333/courses/:id
  ];
});

app.listen(3333);
// localhost:3333
