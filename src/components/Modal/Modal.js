import style from "./Modal.module.scss";
import ReactModal from "react-modal";

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
      <button onClick={props.toggleModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </ReactModal>
  );
};

export default Modal;
