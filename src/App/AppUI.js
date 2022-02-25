import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    loading,
    error,
    total,
    complete,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return(
        <React.Fragment>
        <TodoCounter 
        total={total}
        complete={complete}
        />
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <TodoList>
            {error && <p>Se ha generado un error</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !searchedTodos.length) ? <p>Cargando...</p> : null}

            {searchedTodos.map(todo => (
            <TodoItem  
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={()=>{
                completeTodo(todo.text);
            }}
            onDelete={()=>{
                deleteTodo(todo.text);
            }}
            />
            ))}
        </TodoList>
        <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };