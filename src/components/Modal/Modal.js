import style from "./Modal.module.scss";
import ReactModal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
const Modal = (props) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  return (
    <ReactModal
      isOpen={props.isOpen}
      onAfterOpen={afterOpenModal}
      className={style.modal}
      contentLabel="Example Modal"
      onRequestClose={props.toggleModal}
      overlayClassName={style.overlay}
    >
      <div className={style.modalMenu}>
        <div>
          <a href="##" alt="teste"  >Links</a>
          <a href="##" alt="teste"  >Aparencia</a>
        </div>
        <button onClick={props.toggleModal} className={`btn ${style.btnModal}`}>
          <FaTimesCircle className={style.icons} />
        </button>
      </div>

      <div className={style.modalContent}>
        <h1>Example</h1>
        <h3>teste</h3>
      </div>

    </ReactModal>
  );
};

export default Modal;
