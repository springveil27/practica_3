import React,{useState} from "react";

const Todo = ({todo,todos,setTodos,id}) => {
    const [edit,setEdit] = useState(false);
    const [inputEdit,setInputEdit] = useState(todo.text); 

    const onComplete = () => {
        setTodos(todos.map((item) => {
            if(todo.id === item.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    
    }
    const onchangedsave = (e) => {
        setInputEdit(e.target.value)
    }
    const onEdit = () => {
        setInputEdit(todo.text); 
        setEdit(true);
    }
    const onSave = (id) => {
        if(inputEdit && inputEdit.trim()){
            saveinput(inputEdit.trim());
        } else {
            setInputEdit(todo.text);
        }
        setEdit(false);
    }

    const saveinput = (inputEdit) =>{
        const savetodos = todos.map(item =>
            item.id === id ? { ...item, text: inputEdit } : item
        );
        setTodos(savetodos)
    }

    const onDelete = () => {
        setTodos(todos.filter((i) => i.id !== id));
    }


    if(edit){
        
    return (
        <div className="todo-li">
            <li className='li-list'>
                <input className="li-input" value={inputEdit}  onChange={onchangedsave}/>
                <button className="button-save" onClick={() => onSave(id)}>
                    <span className="text-save">save</span><i className="fas fa-save"></i>
                </button>
            </li>
        </div>
    );

    }
    else{
        
    return (
        <div className="todo-li">
            <li className={`li-list ${todo.completed ? "completed" : ""}`}>
                {/* Mostrar el texto creado en form.js (prop 'text') */}
                <span className="li-input">{todo.text}</span>

                <button className="button-complete" onClick={onComplete}>
                    <span className="text-complete">Complete</span><i className="fas fa-check"></i>
                </button>

                <button className="button-edit" onClick={onEdit}>
                    <span className="text-edit">Edit</span><i className="fas fa-edit"></i>
                </button>

                <button className="button-delete" onClick={onDelete}>
                    <span className="text-delete">Delete</span><i className="fas fa-trash"></i>
                </button>
            </li>
        </div>
    );
    }

}

export default Todo;