import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./ContactForm.css";
import { contactVerification } from "./ContactFormVerification";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    console.log("handleInput - Contact");
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HS-Submit");
    setErrors(contactVerification(values));
    if (values.name && values.email && values.message) {
      axios
        .post("http://localhost:3002/ContactForm/", values)
        .then((res) => {
          console.log("Response:", res);
          if (res.status === 201) {
            console.log("Success!");
            alert("Submitted!");
            navigate("/HomePage");
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Please fill all the fields.");
    }
  };
  return (
    <div className="main-container">
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100 signup-container">
        <div className="">
          <h1 className="signup-header">Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="text">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="form-control rounded-0"
                onChange={handleInput}
              />

              {errors.name && (
                <span className="text-danger"> {errors.name} </span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="form-control rounded-0"
                onChange={handleInput}
              />

              {errors.email && (
                <span className="text-danger"> {errors.email} </span>
              )}

              <label htmlFor="message">
                <strong>Whats on Your Mind?</strong>
              </label>
              <Form.Group
                type="text"
                placeholder="Hello,..."
                name="message"
                className="form-control rounded-0 mb-3"
                onChange={handleInput}
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>We welcome feedback!</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              {errors.password && (
                <span className="text-danger"> {errors.message} </span>
              )}
            </div>
            <Button
              type="submit"
              className="btn btn-success w-100 rounded-0 login-button">
              <strong>Submit</strong>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
