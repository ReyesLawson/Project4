import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import "./ToDoListDB.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";


export const fetchList = async () => {
  try {
    const response = await axios.get("http://localhost:3002/tasks/");
    console.log("Fetching Data from DB successfully");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error fetching Tasks");
  }
};

export const ToDoListDB = ({ task, setTask }) => {
  useEffect(() => {
    console.log("Fetching tasks on initial load");
    const loadData = async () => {
      const loadedTask = await fetchList();
      setTask(loadedTask);
    };
    loadData();
  }, [setTask]);

  const handleDelete = async (taskid) => {
    await axios.delete(`http://localhost:3002/tasks/${taskid}`);
    const updatedTasks = await fetchList();
    setTask(updatedTasks);
  };

  const handlemarked = async (status, taskid) => {
    const newStatus = status === "complete" ? "incomplete" : "complete";
    await axios.post("http://localhost:3002/tasks/updatestatus", {
      status: newStatus,
      taskid: taskid,
    });
    const updatedTasks = await fetchList();
    setTask(updatedTasks);
  };

  return (
    <>
    <div className="main-container-todo"> 
      <Container className="container-fluid-todo ">
        <div className="to-do-list">
          {/* <Form>
            <div className="">
            <tr>
              <h2></h2>
            </tr>
            </div>
          </Form> */}
          <div className="task-container">
            <ol>
              {task.map((item) => {
                return (
                  <li key={item.taskid}>
                    <span className={`${item.status === "complete" ? "complete" : ""}`}>
                    {item.tasks}
                    </span> 
                    <Button
                      className="mark-button"
                      type="text"
                      onClick={() => handlemarked(item.status, item.taskid)}>
                      <i className="bi bi-check-circle-fill fs-2"></i>
                    </Button>
                    <Button
                      className="delete-button"
                      type="text"
                      onClick={() => handleDelete(item.taskid)}>
                      <i className="bi bi-trash fs-2"></i>
                    </Button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
      </div>
      <footer className="footer container-fluid">
        <div className="row">
          <div className="col-sm-2">&copy;GetEr Done</div>
          <div className="col-sm-7">
            <div className="social_media">
              <a
                href="mailto:reyeslawson89@gmail.com"
                className="bi bi-envelope pe-2"></a>
              <a
                href="https://www.facebook.com/"
                className="bi bi-facebook pe-2"></a>
              <a
                href="https://www.messenger.com/login/?next=https%3A%2F%2Fwww.messenger.com%2F"
                className="bi bi-messenger"></a>
            </div>
          </div>
          <div className="col-sm-3">222 To Do, building 2</div>
        </div>
      </footer>
    </>
  );
};
