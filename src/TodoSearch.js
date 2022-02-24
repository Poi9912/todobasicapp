import React from "react";
import './TodoSearch.css';
function TodoSearch(){

    const onChangeValueSearch = (event) =>{
        console.log(event.target.value);
    }

    return(
        <input placeholder="Buscar..." className="search-input"
        onChange={onChangeValueSearch}
        />
    );
}

export {TodoSearch};