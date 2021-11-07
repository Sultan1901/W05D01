const express = require("express");
const app = express();
app.use(express.json());

const todostd = [
  { name: "Sultan", id: 0, iscompleted: false },
  { name: "Sulaiman", id: 1, iscompleted: true },
  { name: "Abdulhakeem", id: 2, iscompleted: false },
  { name: "Ali", id: 3, iscompleted: true },
];

app.get("/home", (req, res) => {
  res.status(200);
  res.json(todostd);
});
app.get("/firstSTD", (req, res) => {
  res.status(200);
  res.json(todostd[0]);
});

app.post("/addtask", (req, res) => {
  todostd.push({ name: "Ahmad", id: 5, iscompleted: false });
  res.json(todostd);
});
//add via url
app.post("/addtask/:name/:id/:complete", (req, res) => {
  const newarr = {
    name: req.params.name,
    id: req.params.id,
    iscompleted: req.params.complete,
  };
  todostd.push(newarr);
  res.json(todostd);
});
//show only true
app.get("/completed", (req, res) => {
  let truly = todostd.filter((i) => i.iscompleted === true);
  res.json(truly);
});
// add from body
app.post("/frombody", (req, res) => {
  let addbody = {
    name: req.body.name,
    id: req.body.id,
    iscompleted: req.body.iscompleted,
  };
  todostd.push(addbody);
  res.json(todostd);
});

// delete
app.delete("/deletee/:id", (req, res) => {
  const deletee = todostd.find((elem) => elem.id == req.params.id);

  todostd.splice(deletee.id, 1);
  res.json(todostd);
});
// update
app.put("/update/:id/:new", (req, res) => {
  const update = todostd.map((elem) => {
    if (elem.id == req.params.id) {
      return {
        id: elem.id,
        name: req.params.new,
        iscompleted: elem.iscompleted,
      };
    } else {
      return elem;
    }
  });

  res.json(update);
});

app.listen(5000, (req, res) => {
  console.log("Server Runing");
});
