import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="item">
            <p>{props.text}</p>
            <span>+</span>
        </li>
    );
}

export {TodoItem}