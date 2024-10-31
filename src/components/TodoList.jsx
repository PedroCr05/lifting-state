const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
};

export default TodoList;
