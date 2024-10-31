import { useState } from "react";

const NewTodo = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(newTodo);
    setNewTodo(``);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input
        id="todoInput"
        type="text"
        name="todo"
        onChange={handleChangeTodo}
        value={newTodo}
      />
      <button type="submit">Create to-do</button>
    </form>
  );
};

export default NewTodo;
