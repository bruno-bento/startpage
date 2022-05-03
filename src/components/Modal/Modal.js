import style from "./Modal.module.scss";
import ReactModal from "react-modal";
import {FaTimesCircle} from "react-icons/fa";
const Modal = (props) => {
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }

  return (
    <ReactModal
      isOpen={props.isOpen}
      onAfterOpen={afterOpenModal}
      style={style.modal}
      contentLabel="Example Modal"
      onRequestClose={props.toggleModal}
    >
      <div>

      </div>
      <button onClick={props.toggleModal}>
        <FaTimesCircle className={style.icons} />
      </button>

    </ReactModal>
  );
};

export default Modal;
