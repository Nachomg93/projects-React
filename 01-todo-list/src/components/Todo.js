// import "./Todo.css";
import { useState } from "react";

function Todo({ item, onUpdate }) {
  const [isEdit, setEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleClickUpdateTodo() {
      onUpdate(item.id, newValue);
      setEdit(false);
    }

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }
    
    return (
      <form className="todo-form-actualizar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          onChange={handleChange}
          value={newValue}
        />
        <button className="boton" onClick={handleClickUpdateTodo}>
          Actualizar
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todo-info">
        {item.title} <button onClick={() => setEdit(true)}>Editar</button>
        <button>Eliminar</button>
      </div>
    );
  }

  return (
    <div className="todo">
      {isEdit ? <FormEdit></FormEdit> : <TodoElement></TodoElement>}
    </div>
  );
}

export default Todo;
