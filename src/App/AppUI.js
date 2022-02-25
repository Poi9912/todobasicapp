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
            {error && <p className="status-loading">Se ha generado un error</p>}
            {loading && <p className="status-loading">Cargando...</p>}
            {(!loading && !searchedTodos.length) ? <p className="status-loading">Crea tu primer ToDo!</p> : null}
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