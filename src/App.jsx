import NewTodo from "./components/NewTodo.jsx";

const App = () => {
  const addTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
    </>
  );
};

export default App;
