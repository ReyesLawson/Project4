import express from "express";
import taskRouts from "./Routes/tasks.js";
import cors from "cors";
import db from "./dbConnection.js";

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/tasks", taskRouts);

app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const sql =
  "SELECT * FROM todolistmanager.login WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "error in the Query" });
    }
    if (data.length > 0) {
      return res.status(200).json({ message: "Good Login" });
      // return res.status(200).json({ allTasks: res.body.tasks });

      // return res.json ("Good Login");
    } else {
      return res.status(401).json({ message: "Login Fail" });
    }
  });
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const sql =
    "INSERT INTO todolistmanager.login (name, email, password) VALUES (?, ?, ?)";
  console.log(name, email, password);
  db.query(sql, [name, email, password], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "error in the Query" });
    } else {
      return res.status(201).json({ message: "Data Inserted Successfully" });
    }
  });
});

app.listen("3002", () => {
  console.log("server is running on port 3002");
});
