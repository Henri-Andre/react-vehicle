import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postRequest } from "../api/api";
import Footer from '../composants/footer/Footer';
import Header from '../composants/public/Header';
import {
    setConfirmPassword,
    setEmail,
    setFirstname,
    setName,
    setPassword,
} from "../redux/reducers/signUp.slice";




const Sign_up = () => {

    const dispatch = useDispatch();
  const signupData = useSelector((state) => state.signup);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, first_name, email, password, confirmPassword } = signupData;

    // Vérifiez si les champs du formulaire sont valides
    const isFormValid = (name && first_name && email && password && confirmPassword);

    if (!isFormValid) {
      console.error("Les champs du formulaire ne sont pas valides");
      return;
    }

    if (password !== confirmPassword) {
      console.error("Les mots de passe ne correspondent pas.");
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return ;
    }

    const url = "/users/sign-up";

    try {
      const response = await postRequest(url, { name, first_name, email, password });
      console.log(signupData);
      // redirect to success page or display success message
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire", error);
      setErrorMessage("Erreur lors de la soumission du formulaire");
    }
  };

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleFirstnameChange = (event) => {
    dispatch(setFirstname(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleConfirmPasswordChange = (event) => {
    dispatch(setConfirmPassword(event.target.value));
  };

  return (
    <div>
       <Header/>

      <main className='signIn'>
        <h2>S'incrire</h2>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Nom :
            <input type="text" onChange={handleNameChange} />
          </label>
          <label>
            Prénom :
            <input type="text" onChange={handleFirstnameChange} />
          </label>
          <label>
            E-mail :
            <input type="email" onChange={handleEmailChange} />
          </label>
          <label>
            Mot de passe :
            <input type="password" onChange={handlePasswordChange} />
          </label>
          <label>
            Confirmer le mot de passe :
            <input type="password" onChange={handleConfirmPasswordChange} />
          </label>
          <button type="submit">S'inscrire</button>
        </form>
      </main>

      <Footer/>
    </div>
  );
};

export default Sign_up;
