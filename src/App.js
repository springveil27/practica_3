import React,{useState} from "react";
import Form from "./Components/form";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
    <div className="header "> 
      <h1>Todo List</h1>
      <div><Form todos={todos} setTodos={setTodos} /></div>
      </div>
    </div>
  );
}

export default App;
