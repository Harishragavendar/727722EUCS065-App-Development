

import React, { useState } from 'react';
import Modal from 'react-modal';
import './Flip1.css'; // Ensure this path is correct

const Flip8 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flipbook-item">
      <div className="flip-container" onClick={openModal}>
        <div className="flipper">
          <div className="front">
            <img
              src="https://cdnc.heyzine.com/flip-book/cover/76c9138c2c.jpg"
              className="flip-image"
              alt="Front Cover"
            />
          </div>
          <div className="back">
            <img
              src="https://cdnc.heyzine.com/flip-book/cover/76c9138c2c.jpg"
              className="flip-image"
              alt="Back Cover"
            />
            <div className="back-content">
              <p>
                <span className="fp-subtitle"></span>
                <br />
                <a rel="noopener noreferrer" className="fp-link" onClick={(e) => { e.stopPropagation(); openModal(); }}>View</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Flipbook Modal"
        className="flipbook-modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal">×</button>
        <iframe
          src="https://heyzine.com/flip-book/76c9138c2c.html"
          style={{ width: '85vw', height: '90vh', border: 'none' }}
          title="Flipbook"
        />
      </Modal>
    </div>
  );
};

export default Flip8;
