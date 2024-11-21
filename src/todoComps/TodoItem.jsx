// TodoItem.js
import PropTypes from "prop-types";
import styles from "../css/todoItem.module.css";
import { motion } from "framer-motion";

export function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={styles.item}
      >
        <div className={styles.item_content}>
          <div className={styles.label}>Nombre</div>
          <div className={styles.content}>{todo.name}</div>

          <div className={styles.label}>Presupuesto</div>
          <div className={styles.content}>{todo.budget}</div>

          <div className={styles.label}>Proforma</div>
          <div className={styles.content}>{todo.proforma}</div>

          <div className={styles.label}>Confirmación</div>
          <div className={styles.content}>{todo.confirmation}</div>

          <div className={styles.label}>Producción</div>
          <div className={styles.content}>{todo.production}</div>

          <div className={styles.label}>Packing List</div>
          <div className={styles.content}>{todo.packingList}</div>

          <div className={styles.label}>Recogida</div>
          <div className={styles.content}>{todo.collection}</div>

          <div className={styles.label}>Albarán</div>
          <div className={styles.content}>{todo.deliveryNote}</div>
        </div>

        <div className={styles.description}>
          <strong>{todo.fechaHora}</strong>
          <button onClick={onDelete} className={styles.delete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-trash"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </motion.li>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    proforma: PropTypes.string.isRequired,
    confirmation: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired,
    packingList: PropTypes.string.isRequired,
    collection: PropTypes.string.isRequired,
    deliveryNote: PropTypes.string.isRequired,
    fechaHora: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
