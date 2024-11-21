import styles from "../css/home.module.css";
import { TodoList } from "../todoComps/TodoList";

export function Home({ todos, deleteTodo }) {
  return (
    <>
      <div className={styles.content}>
        {todos.length >= 1 ? (
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        ) : (
          <h2 className={styles.title}>Vacio...</h2>
        )}
      </div>
    </>
  );
}
