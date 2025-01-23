import React, { useEffect, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Table from "react-bootstrap/Table";
import axios from "axios";


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

export const ToDoListDB = ({task, setTask}) => {

  useEffect(() => {
    console.log("Fetching tasks on initial load");
    const loadData = async () => {
    const loadedTask = await fetchList();
    setTask(loadedTask);
    }
    loadData();
    
  }, [setTask]);


  const handleDelete = async (taskid) => {
    await axios.delete (`http://localhost:3002/tasks/${taskid}`);
      const updatedTasks = await fetchList();
      setTask(updatedTasks);
  };

  

  return (
    <>
      <h1>List of ToDos</h1>
      <Table striped bordered hover>
        <div>home</div>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task) => {
            return (
              <tr key={task.taskid}>
                <td>{task.taskid}</td>
                <td>{task.tasks}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(task.taskid)}>
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
