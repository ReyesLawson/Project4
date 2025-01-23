import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import LoginVerification from "../LoginVerification/LoginVerification";

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
    // const validationErrors = LoginVerification(values);
    // setErrors(validationErrors);
    if (values.email && values.password) {
      axios
        .post("http://localhost:3002/login/", values)
        // .post("http://localhost:3002/login/", {
        //   email: "reyes.lawson@gmail.com",
        //   password: "12345678",
        // })
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
    <div className="d-flex justify-content-center align-items-center bg-primary">
      <div className="p-3 bg white w-25">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
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
            <strong>Login</strong>
          </Button>
          I agree to terms and conditions
          <Link
            to="/signup"
            className="btn btn-outline-secondary w-100 rounded-0">
            <strong>Create Account</strong>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
