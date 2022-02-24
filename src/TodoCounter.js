import React from "react";
import './TodoCounter.css';

function TodoCounter({total, complete}) {
    return(
        <h2 className="TodoCounter">Has completado {complete} de {total} Tareas</h2>
    );
}

export {TodoCounter};