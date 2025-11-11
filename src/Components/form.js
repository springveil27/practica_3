import React,{useState} from "react";
import {v4 as uuid} from "uuid";

const Form = ([todos, setTodos]) =>{
    const [input, setInput] = useState("");
    
    const onChange = (e) =>{
        setInput(e.target.value);
    }
    const onsubmit = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, {text: input, completed: false, id: uuid()}]);
        ;
    }
    return(
        <form onSubmit={onsubmit}>
            <input className="input-form" 
            type="text" 
            placeholder="ingresa una tarea"
            autoComplete="off"
            value = {input}
            onChange = {onChange}
                />
            <button className="boton-add" type="onSubmit">agregar</button>
        </form>

    )

}

export default Form;