import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";
const TodoContext = React.createContext();
const TodoVersion = "TODOS_V1";

function TodoProvider(props){
  const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage(TodoVersion,[]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if(!searchValue.length >= 1){
      searchedTodos = todos;
  }
  else{
      searchedTodos=todos.filter(todo => {
      const todotext = todo.text.toLowerCase();
      const searchtext = searchValue.toLowerCase();
      return todotext.includes(searchtext);
      });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
        completed: false,
        text,
    })
    saveTodos(newTodos);
}

  const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text); //obtiene index para hacer cambio
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text); //obtiene index para hacer cambio
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
  }

  return(
      <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal
      }}>
          {props.children}
      </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }