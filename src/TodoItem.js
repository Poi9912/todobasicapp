import React from "react";
import './TodoItem.css';

const iconCheck = "Icon-check--active";
const itemCompleted = "item-content--complete";

function TodoItem(props){
    return(
        <li className="item">
            <span className={`Icon-check ${props.completed} && ${iconCheck}`}> &#10004; </span>
            <p className={`item-content ${props.completed} && ${itemCompleted}`}>{props.text}</p>
            <span className="Icon Icon-delete">&#10006;</span>
        </li>
    );
}

export {TodoItem}