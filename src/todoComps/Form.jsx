import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../css/form.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Form({ addTodo }) {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [proforma, setProforma] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [production, setProduction] = useState("");
  const [packingList, setPackingList] = useState("");
  const [collection, setCollection] = useState("");
  const [deliveryNote, setDeliveryNote] = useState("");

  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    const fechaHoraActual = new Date().toLocaleString(); // Obtener la fecha y hora actual

    const newTodo = {
      name,
      budget,
      proforma,
      confirmation,
      production,
      packingList,
      collection,
      deliveryNote,
      fechaHora: fechaHoraActual, // Incluir fecha y hora en el objeto
    };

    // Obtener los items existentes de LocalStorage o inicializar una lista vacía si no hay nada
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = [...existingTodos, newTodo];

    // Guardar la lista actualizada en LocalStorage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // Añadir el nuevo todo a la lista en la aplicación (si es necesario)
    addTodo(newTodo);

    // Limpiar los inputs
    setName("");
    setBudget("");
    setProforma("");
    setConfirmation("");
    setProduction("");
    setPackingList("");
    setCollection("");
    setDeliveryNote("");

    setShowModal(true); // Mostrar el modal correctamente
  };

  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  return (
    <>
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del cliente"
          />
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Presupuesto"
          />
          <input
            type="text"
            value={proforma}
            onChange={(e) => setProforma(e.target.value)}
            placeholder="Proforma"
          />
          <input
            type="text"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            placeholder="Confirmación"
          />
          <input
            type="text"
            value={production}
            onChange={(e) => setProduction(e.target.value)}
            placeholder="Producción"
          />
          <input
            type="text"
            value={packingList}
            onChange={(e) => setPackingList(e.target.value)}
            placeholder="Packing List"
          />
          <input
            type="text"
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
            placeholder="Recogida"
          />
          <input
            type="text"
            value={deliveryNote}
            onChange={(e) => setDeliveryNote(e.target.value)}
            placeholder="Albarán"
          />

          <button type="submit" className={styles.add_btn}>
            Agregar
          </button>
        </form>

        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.modal}
          >
            <div className={styles.modal_content}>
              <p>
                <strong>Pedido creado!</strong>
              </p>
              <Link to="/" className={styles.see_btn}>
                Ver
              </Link>
              <button onClick={closeModal} className={styles.close_modal}>
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
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
