import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="item">
            <span className={`Icon-check ${props.completed} && 'Icon-check--active'`}> &#10004; </span>
            <p className={`item-content ${props.completed} && 'item-content--complete'`}>{props.text}</p>
            <span className="Icon Icon-delete">&#10006;</span>
        </li>
    );
}

export {TodoItem}