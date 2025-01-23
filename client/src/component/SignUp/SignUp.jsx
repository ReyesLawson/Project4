import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignUpDB } from "../SignUpDB/SignUpDB";
import axios from "axios";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const handleInput = (event) => {
    console.log("handleInput - SignUp")
    setValues((prev) => ({ 
      ...prev, 
      [event.target.name]: event.target.value, 
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HS-SIGNUP")
    setErrors(SignUpDB(values));
    if (values.name && values.email && values.password) {
      axios
        .post("http://localhost:3002/signup/", values)
        .then((res) => {
          if(res.status === 200){
            console.log ("SUCCESS!!");
            navigate("/Login");
          } 
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="p-3 bg white w-25">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="text">
              <strong>Name</strong>
            </label>
            <input
              type="name"
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
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={handleInput}
            />

            {errors.password && (
              <span className="text-danger"> {errors.password} </span>
            )}
          </div>
          <Button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Sign Up</strong>
          </Button>
          <div>
            I agree to terms and conditions
            <Link to="/" className="btn btn-outline-secondary w-100 rounded-0">
              <strong>Login In</strong>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
