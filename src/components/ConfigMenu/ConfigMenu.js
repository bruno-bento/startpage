import style from './ConfigMenu.module.scss'
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
          <FaCog className={style.icons} />
        </button>
        <Modal isOpen={modalIsOpen} toggleModal={toggleModal} />
      </nav>

    );

}

export default ConfigMenu;