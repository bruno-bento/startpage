import './ConfigMenu.css'
import { FaCog } from "react-icons/fa";
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
const ConfigMenu = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!modalIsOpen);
    } 
    
    return (
        <nav>
        <button  onClick={toggleModal} className="btn">
          <FaCog className="icons" />
        </button>
        <Modal isOpen={modalIsOpen} toggleModal={toggleModal} />
      </nav>

    );

}

export default ConfigMenu;