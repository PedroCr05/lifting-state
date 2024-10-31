import { useState } from "react";

const NewTodo = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo("Hey, we're adding a new todo mate!");
    console.log("Creating a new to-do...");
  };

  const handleChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input
        id="todoInput"
        type="text"
        name="todo"
        value={newTodo}
        onChange={handleChangeTodo}
      />
      <button type="submit">Create to-do</button>
    </form>
  );
};

export default NewTodo;
