import React from "react";
import './TodoItem.css';

function TodoItem(props){
    

    return(
        <li className="item">
            <span className={`Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            > &#10004;
            </span>
            <p className={`item-content ${props.completed && 'item-content--complete'}`}
            >{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            >&#10006;</span>
        </li>
    );
}

export {TodoItem}