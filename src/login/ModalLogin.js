import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { postRequest } from '../api/api';
import { accountService } from '../service/account';

const ModalLogin = () => {

    const [showModal, setShowModal] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState(null);


  const handleSubmit = async (event) => {
    try {
        event.preventDefault();

        const isFormValid = (email && password);

        if (!isFormValid) {
            console.error("Email et mot de passe sont obligatoire");
            setErrorMessage("Email et mot de passe sont obligatoire.");
            return;
        } else {
            setErrorMessage("");
        }

        const url = '/users/sign-in';
        const response = await postRequest(url, { email, password });
        
        // traitement de la réponse du backend
        

        if (!response.result) {
            setErrorMessage("Email ou mot de passe sont incorrect.");
        } else {
            const userId = response.result.data.id;
            const token = response.result.token;
            // Stocker le jeton dans le stockage local
            accountService.saveToken(token)

            window.location.replace(`http://localhost:3000`);
            setLogget(true);
            console.log(token);
        }
        console.log(response.result.data);
    

    } catch (error) {
        console.error("Une erreur s'est produite lors de la soumission du formulaire :", error);
    }
};






  
  
    return (
      <div>
        <a  onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faUser} />Login 
        </a>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Login</h2>

              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <form onSubmit={handleSubmit}>
                  <label> E-mail :</label>
                    <input type="email"  onChange={(event) => setEmail(event.target.value)}/>
                  
                  <label> Mot de passe :</label>

                  <input type="password"  onChange={(event) => setPassword(event.target.value)}/>
                  
                  <button className='btnLogin' type="submit">Se connecter</button>
                </form>
              <button onClick={() => setShowModal(false)} className="closeLogin">
                X
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default ModalLogin;
