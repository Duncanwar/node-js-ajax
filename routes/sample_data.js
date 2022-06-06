var express = require("express");
var router = express.Router();
var database = require("../database");

router.get("/", (req, res, next) => {
  res.render("sample_data", { title: "Node JS Ajax CRUD application" });
});

router.post("/action", (req, res, next) => {
  var action = req.body.action;
  if (action == "fetch") {
    var query = "SELECT * FROM sample_data ORDER BY id DESC";
    database.query(query, (err, data) => {
      res.json({
        data: data,
      });
    });
  }
  if (action == "Add") {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var age = req.body.age;
    var gender = req.body.gender;
    var query = `INSERT INTO sample_data (first_name,last_name,age,gender)VALUES ("${first_name}", "${last_name}", "${age}", "${gender}")`;

    database.query(query, (error, data) => {
      res.json({
        message: "Data Added",
      });
    });
  }
});

module.exports = router;
