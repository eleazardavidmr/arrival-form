// TodoList.js
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
import styles from "../css/todoList.module.css";

export function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.container}>
      <AnimatePresence>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(index)} // Usar deleteTodo aquí
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
