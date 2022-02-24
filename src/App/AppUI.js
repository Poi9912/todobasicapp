import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({total,complete,searchValue,setSearchValue,searchedTodos,completeTodo,deleteTodo}){
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