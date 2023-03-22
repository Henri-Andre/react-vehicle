import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { postRequest } from '../../api/api';


const ModalLogin = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
        e.preventDefault();
        
        const data = {email, password };
        const url = '/users/sign-in';
    
        try {
          const response = await postRequest(url, data);
          console.log(response);
        } catch (error) {
          console.error(error);
        }

    };
    return (
        <div>

            <button onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faUser} />
            </button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                        </form>
                        <button onClick={() => setShowModal(false)}>X</button>
                    </div>
                </div>

            )}
        </div>
       
           
)};

export default ModalLogin;