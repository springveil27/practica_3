import React,{useEffect, useState} from "react";
import Form from "./Components/form";
import Todolist from "./Components/Todolist";

function App() {
  const getinitialtodos = () => {
    const storedtodos = localStorage.getItem("todos")
    
    if (!storedtodos) return [];
    
    try {
      const parsed = JSON.parse(storedtodos);
      // Validate that parsed data is an array
      if (!Array.isArray(parsed)) return [];
      
      // Validate each todo has required properties
      return parsed.filter(todo => 
        todo && 
        typeof todo.text === 'string' && 
        typeof todo.completed === 'boolean' && 
        todo.id
      );
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
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
