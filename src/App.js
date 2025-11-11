import React,{use, useEffect, useState} from "react";
import Form from "./Components/form";
import Todolist from "./Components/Todolist";

function App() {
  const getinitialtodos = () => {
    const storedtodos = localStorage.getItem("todos")

    return storedtodos ? JSON.parse(storedtodos) : [];
  }

  const [todos, setTodos] = useState(getinitialtodos);
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos))}, [todos]);
  
  return (
    <div className="App">
    <div className="header "> 
      <h1>Lista de tarea</h1>
      <div><Form todos={todos} setTodos={setTodos}/></div>
      <div><Todolist todos={todos} setTodos={setTodos}/></div>
      </div>
    </div>
  );
}

export default App;
