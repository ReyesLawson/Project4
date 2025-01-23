import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToDoListDB } from "./component/ToDoListDB/ToDoListDB";
import AddTask from "./component/AddTask/AddTask";
import { Form, Col, Row, Button } from "react-bootstrap";
import SignUp from "./component/SignUp/SignUp";
import HomePage from "./component/HomePage/HomePage";
import Login from "./component/Login/Login";

function App() {
  const [formData, setFormData] = useState({ tasks: "" });
  const [task, setTask] = useState([]);
  const [user, setUser] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route
        path="/HomePage"
        element={<ToDoListDB task={task} setTask={setTask} />}></Route>
    </Routes>
  );
}
//     <div className="App container-fluid app-container">
//       <div>
//         <h1>React To-DO List</h1>
//         {user ? (
//           <>
//             <h2>Welcome,{user.userName}</h2>
//             <AddTask
//               formData={formData}
//               setFormData={setFormData}
//               setTask={setTask}
//             />
//             <ToDoListDB task={task} setTask={setTask} />
//           </>
//         ) : (
//           // <LoginDB/>
//           <h1>Hello</h1>
//         )}

//       </div>
//     </div>
//   );
// }

export default App;
