import "./Modal.css";
import ReactModal from "react-modal";

const Modal = (props) => {
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

  return (
    <ReactModal
      isOpen={props.isOpen}
      onAfterOpen={afterOpenModal}
      style={customStyles}
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
