import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {LoginVerification} from "../LoginVerification/LoginVerification"
import "./Login.css"

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const handleInput = (event) => {
    console.log("handleInput - LOGIN");
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit - LOGIN");
    setErrors(LoginVerification(values));
    if (values.email && values.password) {
      axios
        .post("http://localhost:3002/login/", values)
        .then((res) => {
          // if (res.data === "Good Login") {
          if (res.status === 200) {
            console.log("SUCCESS!!");
            navigate("/HomePage");
          } else {
            alert("No User Exists");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="main-login-container">
    <div className="d-flex justify-content-center align-items-center bg-primary vh-50 login-container">
      <div className="">
        <h1 className="head-login">Login</h1>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <h2>Email</h2>
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
              <h2>Password</h2>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0 login-email-container"
              onChange={handleInput}
            />

            {errors.password && (
              <span className="text-danger"> {errors.password} </span>
            )}
          </div>
          <Button type="submit" className="btn btn-success w-100 rounded-0 login-button">
            <strong>Login</strong>
          </Button>
         <p>I agree to terms and conditions</p> 
          <Link
            to="/signup"
            className="btn btn-outline-secondary w-100 rounded-0">
            <strong>Create Account</strong>
          </Link>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default Login;
