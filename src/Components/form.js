import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ todos, setTodos }) => {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onsubmit = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        
        // Validate: no empty tasks, max length 500 characters
        if (!trimmedInput) return;
        if (trimmedInput.length > 500) {
            alert("La tarea es demasiado larga. Máximo 500 caracteres.");
            return;
        }
        
        setTodos([
            ...todos,
            { text: trimmedInput, completed: false, id: uuid() }
        ]);
        setInput("");
    }

    return (
        <form onSubmit={onsubmit}>
            <input
                className="input-form"
                type="text"
                placeholder="ingresa una tarea"
                autoComplete="off"
                value={input}
                onChange={onChange}
                maxLength={500}
            />
            <button className="boton-add" type="submit">agregar</button>
        </form>
    )
}

export default Form;