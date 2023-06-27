
import Modal from './lib/Components/Modal';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function App() {
  // L'utilisateur peu gérer l etat du state ouvert fermé
  const [showModal, setShowModal] = useState(false)




  const handleFirstBtnClick = () => {
    // Mettez ici la logique de validation que vous souhaitez effectuer
    // par exemple, une boîte d'alerte pour indiquer exit
    alert('Exit!');
    setShowModal(false)
  };
  // for second button
  const handleSecondBtnClick = () => {
    // Mettez ici la logique de validation que vous souhaitez effectuer
    // par exemple, une boîte d'alerte pour indiquer la validation réussie
    alert('Validation successful!')

  };

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={() => setShowModal(true)}>open modal</button>
        {/* past the code bloc  */}
        {showModal &&
          createPortal(
            <Modal
              closeModal={() => setShowModal(false)} // Callback function to close the modal
              theme='success-dark' // Theme of the modal ('validation' in this case)
              title='Title' // Title of the modal
              textContent='Your text content!' // Content of the modal
              modalSize='modal-large' // Size of the modal ('modal-large' in this case)
              miniBtnActive={true} // Flag indicating whether the mini button is active
              FirstBtnActive={{
                text: 'Exit', // Text for the first button
                onFirstBtnClick: handleFirstBtnClick // Callback function when the first button is clicked
              }}
              DoubleBtnActive={{
                text: 'Validation',// Text for the second button
                onSecondBtnClick: handleSecondBtnClick,// Callback function when the second button is clicked
              }} // il faut pouvoir lui donner un state !!!!!
            />
            , document.body)}
      </header>
    </div>
  )
}

export default App

