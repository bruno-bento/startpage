import style from "./Modal.module.scss";
import ReactModal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
import { linksArray } from "../data/data";
import Links from "../Links/Links";
import ModalForm from "./ModalForm/ModalForm";

const Modal = (props) => {
  if (linksArray.length === 0) {
    return (
        <div className={`card ${style.contentLinks}`}>
            <p className="">Nenhum Item Encontrado</p>;
        </div>
    );
  }
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
          <a href="##" alt="teste">
            Links
          </a>
          <a href="##" alt="teste">
            Aparencia
          </a>
        </div>
        <button onClick={props.toggleModal} className={`btn ${style.btnModal}`}>
          <FaTimesCircle className={style.icons} />
        </button>
      </div>

      <div className={style.modalContent}>
        <div>
          <ModalForm/>
        </div>
        <div className={style.modalContentLinks}>
          {linksArray.map((link) => (
            <Links key={link.title} link={link.links} title={link.title} />
          ))}
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
