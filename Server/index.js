const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 3000;
const id = 37;
const year = 2022;
const stdName = "karthikey";
const branch = "BCS";

app.get("/", (req, res) => {
  res.status(200);
  res.send("hello World");
});



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "CRUD",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});


connection.query(`SELECT * FROM test;`, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
