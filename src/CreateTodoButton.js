import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(){

    const onClickButton = () =>{
        alert("se debe abrir modal aquí");
    }

    return(
        <button 
        className="create-button"
        onClick={() => onClickButton()}
        >
        +
        </button>
    );
}

export { CreateTodoButton }