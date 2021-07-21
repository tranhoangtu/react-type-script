import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

function App() {
  const todosArr = [new Todo("Learn react"), new Todo("Learn typescript")];
  const [todosArray, setTodosArray] = useState<Todo[]>(todosArr);
  const addTodo = (todotext: string) => {
    setTodosArray([...todosArray, new Todo(todotext)]);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todosArray} />
    </div>
  );
}

export default App;
