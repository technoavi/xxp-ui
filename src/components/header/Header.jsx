import "./header.css";
import "./ResponsiveHeader.css";
import Modal from "react-modal";
import { useState } from "react";

import { Link } from 'react-router-dom';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoggedIn, isLoggedOut] = useState(false);

  function loggedIn() {
    isLoggedIn(true);
  }
  function loggedOut() {
    isLoggedOut(true);
  }
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
   
  }

  return (
    <header>
      <div className="wraper">
        <div className="logo">
          <h1>Qurio</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Courses</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
          <div className="btn">
          <Link className='modalBtn' style={{textDecoration: 'none'}} to="/login">
          <button type="text" >LOGIN1</button>
          </Link>
            <button type="text" onClick={openModal}>LOGIN</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="modal">
                <h1>Sign In to your Account</h1>
                
                <input type="text" placeholder="enter username"/>
                {/* <label>Password</label> */}
                <input type="password" placeholder="enter password"/>
                <Link className='modalBtn' style={{textDecoration: 'none'}} to="/tc">
                <button type="text" className='modalBtn' onClick={() => { 
                  closeModal();
             
                  
                }}>Login</button></Link>
              </div>
              </Modal>
          </div>
        </nav>
      </div>
    </header>
  );
};
