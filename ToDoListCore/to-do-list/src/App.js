import React, { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleDelete = (delIndex) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIndex;
    });

    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={(event) => handleNewTodoSubmit(event)}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />

      {todos.map((todo, i) => (
        <div key={i}>
          <span>
            {todo.text}
            <input
              type="checkbox"
              onChange={(event) => handleToggleComplete(i)}
              checked={todo.complete}
            />
            <button
              onClick={(event) => handleDelete(i)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
