import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
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

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
