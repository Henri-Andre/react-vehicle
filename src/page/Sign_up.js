import React from 'react';
import Header from '../composants/header/header';
import { useState } from 'react';
import { postRequest } from '../api/api';

const Sign_up = () => {

    const [name, setName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
        const handleSubmit = async (event) => {
            event.preventDefault();
        
            const data = { name, first_name, email, password };
            const url = '/users/sign-up';
        
            try {
              const response = await postRequest(url, data);
              console.log(response);
            } catch (error) {
              console.error(error);
            }

            window.location.href = 'http://localhost:3000/acceuil';
          };

    



    return (
        <div>
            <Header/>
        

        <main className='signIn'>

            <h2>S'incrire</h2>


            
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom d'utilisateur:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required/>


                    <label htmlFor="first_name">Nom d'utilisateur:</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={first_name}
                        onChange={(event) => setFirstName(event.target.value)}
                        required/>

                    <label htmlFor="email">Adresse email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required/>

                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required/>

                    <input type="submit" value="S'inscrire" />
            </form>
            </main>

        </div>
    );
};

export default Sign_up;