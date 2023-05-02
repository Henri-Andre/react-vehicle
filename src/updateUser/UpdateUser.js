import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '../api/api';

const UpdateUser = () => {


    const dispatch = useDispatch();
    const signupData = useSelector((store) => store.signup);
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
        window.location.replace(`http://localhost:3000`);
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
            
        </div>
    );
};

export default UpdateUser;