import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

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