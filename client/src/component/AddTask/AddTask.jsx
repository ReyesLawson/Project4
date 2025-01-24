import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { fetchList } from "../ToDoListDB/ToDoListDB.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AddTask.css";

export default function AddTask({ setTask}) {
  const [formData, setFormData] = useState ({
      tasks:'',
  });

  useEffect(() => {
    const loadData = async () => {
      const loadedTask = await fetchList();
      setTask(loadedTask);
      console.log (loadedTask);
    };

    const timer = setTimeout(() => {
      loadData();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const response = await axios.post(
        "http://localhost:3002/tasks/",
        formData
      );
      console.log(response);
      if (response.status === 200) console.log("Added Successful");
      else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("Input changed - Name:", name, "Value:", value);
    setFormData({ ...formData, [name]: value });
  };



  return (
    <>
      <Container className="container-fluid input-container-at" >
        <h1 className="allura-regular at-header"> Add New Task </h1>
        <Form noValidate onSubmit={handleSubmit}>
          <div className=" input-box">
            <Form.Group className="input-box-at"controlId="validationCustom01">
              
              <Form.Control
              className="form-input-text"
                required
                type="text"
                name="tasks"
                placeholder="What Do I need to Do?"
                value={formData.tasks}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <Row className="input-container-at">
            <Button 
          className="add-button"
            type="submit">Add to List</Button>
          </Row>
          
        </Form>
      </Container>
    </>
  );
}


