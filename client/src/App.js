import "./App.css";
import ToDoList from "./component/ToDoList/ToDoList";
import {ToDoListDB} from "./component/ToDoListDB/ToDoListDB";
import AddTask from "./component/AddTask/AddTask";
import { useState } from "react";
// import Login from './component/Login/Login';

/**
 * function test1(a,b,c) {
 *  console.log(a,b,c)
 * }
 * 
 * test1(a=1,b=2,c=3)
 */

function App() {
  const [formData, setFormData] = useState({ tasks: "" });
  const [task, setTask] = useState([]);

  return (
    <>
      <h1> React Main Component</h1>
      <AddTask formData={formData} setFormData={setFormData} setTask={setTask} />
      <ToDoListDB task={task} setTask={setTask} />

      {/* <AddTask />
      <ToDoListDB /> */}
      {/* <Login/> */}
    </>
  );
}

export default App;

{
  /* <Router>
      <div className="App container-fluid app-container">
        <header className="App-header container-fluid">
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/TODOLIST" element={<ToDoListDB/>} />
            <Route path="/TODOLIST" element={<AddTask/>} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
        </main>
      </div>
    </Router> */
}
