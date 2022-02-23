import React from "react";

const style = {
    color: "red",
    backgroundColor: "yellow"
}

function TodoCounter() {
    return(
        <h2 style={style}>Has completado 2 de 3 Tareas</h2>
    );
}

export {TodoCounter};