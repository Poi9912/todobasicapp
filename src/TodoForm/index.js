import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return (
        <form onSubmit={onAdd} className="TodoForm">
            <label>Ingresa tu nuevo todo</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ir de compras..."
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel} type="button">Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};