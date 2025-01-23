import express, { response } from "express";
import db from "../dbConnection.js";

const Router = express.Router();

Router.get("/", (req, res) => {
  db.query("Select * From tasks ", (err, result) => {
    if (err) {
      console.log("Error Listing Task:", err);
      res.status(500).json({ message: "error in the Query" });
    } else res.send(result);
  });
});

Router.post("/", (req, res) => {
  const { tasks } = req.body;
  const sql = "INSERT INTO tasks (tasks) Values (?)";
  db.query(sql, [tasks], (err, result) => {
    if (err) {
      console.log("Error Adding Task:", err);
      res.status(500).json({ message: "error in the Query" });
    } else res.send("result task added");
  });
});

Router.delete("/:id", (req, res) => {
  const taskid = req.params.id;
  db.query("DELETE FROM tasks WHERE taskid = ?", [taskid], (err, result) => {
    if (err) {
      console.log("Error in Listing Students:", err);
      res.status(500).json({ message: "error in the Query" });
    } else res.send(result);
  });
});

Router.post("/updatestatus", (req, res) => {
    console.log(req.body);
  const { status, taskid } = req.body;
  const sql = `UPDATE todolistmanager.tasks SET status = ? WHERE taskid = ?`;
  db.query(sql, [status, taskid], (err, result) => {
    if (err) {
        console.log ("Error updating status:",err);
        return res.status(500).json({ message: "error updating task" });
    }
      return res.status(200).json({ message: "Task updated successfully" });
  });
});

export default Router;
