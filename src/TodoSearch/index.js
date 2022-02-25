import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onChangeValueSearch = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input placeholder="Buscar..." className="search-input"
        onChange={onChangeValueSearch}
        value={searchValue}
        />
    );
}

export {TodoSearch};