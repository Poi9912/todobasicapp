import React from "react";
import { AppUI } from "./AppUI";

const TodoVersion = "TODOS_V1";

/*const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Curso básico react", completed: false },
  { text: "Subir código", completed: true },
  { text: "Preparar aplicación test", completed: false },
  { text: "Campo de texto largo para generar doble o triple linea dentro del visualizador 1", completed: false },
];
localStorage.setItem(TodoVersion, JSON.stringify(defaultTodos));
*/

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(()=>{
    try{
        setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 1000);
    } catch(err) {
      setError(err);
    }
  });

  const saveItem = (newItem) => {
    try  {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedItem);
      setItem(newItem);
    } catch (err){
      setError(err);
    }
  }

  return  {item,saveItem,loading,error};
}

function App() {

  const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage(TodoVersion,[]);
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
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //obtiene index para hacer cambio
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      loading={loading}
      error={error}
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
