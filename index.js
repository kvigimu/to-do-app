// nmp framework ir bibliotekos: express, cors ir body-parser
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tasks = [];
// http methodai: get, post,put/patch, delete
app.get("/getTasks", function (req, res) {
  res.status(200).json({ tasks: tasks });
});

app.post("/insertTask", function (req, res) {
  console.log(req.body.task);
  tasks.push({
    task: req.body.task,
    isDone: req.body.isDone,
  });
  res.status(200).json({ statusMessage: "task was inserted successfully" });
});

app.listen(3000);
