import React, { useEffect, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { fetchList } from "../ToDoListDB/ToDoListDB.jsx";

export default function AddTask({ formData, setFormData, setTask }) {
  // const [formData, setFormData] = useState ({
  //     tasks:'',
  // });

  useEffect(() => {
    const loadData = async () => {
      const loadedTask = await fetchList();
      setTask(loadedTask);
    };

    const timer = setTimeout(() => {
      loadData();
    }, 3000);

    return () => {clearTimeout(timer);}
    
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
      <Container>
        <h1> Add New Task </h1>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Task</Form.Label>
              <Form.Control
                required
                type="text"
                name="tasks"
                placeholder="Add Your Task"
                value={formData.tasks}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    </>
  );
}
{
  /* <Button
                type="submit"
                className="need-todo-button"
                onClick={incomplete}>
                {state.showIncomplete ? "Show All" : " Show Incomplete"}
              </Button> */
}

{
  /* //   <Form noValidate onSubmit={handleSubmit}>
      //   <Row className="mb-3">
      //     <Form.Group as={Col} md="4" controlId="validationCustom01">
      //       <Form.Label>Add Task</Form.Label>
      //       <Form.Control
              required
              type="text"
              placeholder="What needs to be done?"
              defaultValue=""
            />
            
          </Form.Group>
        </Row>
        
        <Button type="Submit">Submit</Button>
        <Button type="Show Incomplete">Show Incomplete</Button>
      </Form> */
}
