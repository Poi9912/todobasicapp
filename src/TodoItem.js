import React from "react";
import './TodoItem.css';

function TodoItem(props){

    const onComplete = () =>{
        alert("tarea completa " + props.text);
    }

    const onDelete = () =>{
        alert("tarea " + props.text + " eliminada!!!");
    }

    return(
        <li className="item">
            <span className={`Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onComplete}
            > &#10004;
            </span>
            <p className={`item-content ${props.completed && 'item-content--complete'}`}
            >{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={onDelete}
            >&#10006;</span>
        </li>
    );
}

export {TodoItem}