import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Curso básico react", completed: false },
  { text: "Subir código", completed: true },
  { text: "Preparar aplicación test", completed: false },
  { text: "Campo de texto largo para generar doble o triple linea dentro del visualizador 1", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //obtiene index para hacer cambio
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //obtiene index para hacer cambio
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      total={totalTodos}
      complete={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
