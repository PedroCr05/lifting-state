const NewTodo = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Creating a new to-do...");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input id="todoInput" type="text" name="todo" />
      <button type="submit">Create to-do</button>
    </form>
  );
};

export default NewTodo;
