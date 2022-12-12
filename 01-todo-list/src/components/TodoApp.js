// import './TodoApp.css';
import { useState } from "react";
import Todo from "./Todo";

function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo)

    setTodos(temp)
  };

  function handleUpdate(id, value){
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };

  return (
    <div className="todo-container">
      <form className="todo-create-form" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todo-input" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="button-create"
        />
      </form>

      <div className="todos-container">
        {todos.map((item) => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
