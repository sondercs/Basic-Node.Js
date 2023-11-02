const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.get("/", (res, req) => {
  return req.json({ message: "Hello Word" });
});

app.listen(3333);
// localhost:3333
