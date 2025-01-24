import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToDoListDB } from "./component/ToDoListDB/ToDoListDB";
import AddTask from "./component/AddTask/AddTask";
import { Container } from "react-bootstrap";
import SignUp from "./component/SignUp/SignUp";
import HomePage from "./component/HomePage/HomePage";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [formData, setFormData] = useState({ tasks: "" });
  const [task, setTask] = useState([]);
  const [user, setUser] = useState("");

  return (
    
      
      <div className="App container-fluid app-container">
        <header className="App-header container-fluid">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/NavBar" element={<NavBar />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route
              path="/HomePage"
              element={
                <>
                  <AddTask setTask={setTask} />
                  <ToDoListDB task={task} setTask={setTask} />
                </>
              }
            />
          </Routes>
        </main>
      </div>
      
    
  );
}

export default App;
