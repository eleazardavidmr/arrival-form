// App.js
import { Nav } from "./frontComps/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./css/app.module.css";
import { Home } from "./frontComps/Home";
import { Form } from "./todoComps/Form";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    // Pregunta de confirmación antes de eliminar
    const isConfirmed = window.confirm(
      "¿Estás seguro de que deseas eliminar este pedido?"
    );
    if (isConfirmed) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
  };

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home todos={todos} deleteTodo={deleteTodo} />}
          />
          <Route path="/form" element={<Form addTodo={addTodo} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
