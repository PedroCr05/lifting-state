import NewTodo from "./components/NewTodo.jsx";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    console.log(updatedTodos);
  };

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
    </>
  );
};

export default App;
