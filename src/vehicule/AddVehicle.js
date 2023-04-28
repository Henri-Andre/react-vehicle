import React, { useState } from 'react';
import { postRequest } from '../api/api';
import Footer from '../composants/footer/Footer';
import Header from '../composants/public/Header';

const AddVehicle = () => {
    const [vehicle, setVehicle] = useState("");
    const [image, setImage] = useState("");
    const [history, setHistory] = useState("");
    const [price, setPrice] = useState("");
    const [fuel_id, setFuelId] = useState("");
    const [type_id, setTypeId] = useState("");
    const [video, setVideo] = useState("");

    const [errorMessage, setErrorMessage] = useState(null);

  
    const handleSubmit = async (e) => {
      try {
        

        const isFormValid = (vehicle && image && history && price && video && fuel_id && type_id );

        if (!isFormValid) {
            console.error("Information incomplete");
            setErrorMessage("Information incomplete.");
            return;
        } else {
            setErrorMessage("");
        }

        const url = '/vehicles/add';
        const response = await postRequest(url, {vehicle, image, history,  price,  fuel_id,  type_id,  video });
        
        // traitement de la réponse du backend
        

        console.log(response)
    

    } catch (error) {
        console.error("Une erreur s'est produite lors de la soumission du formulaire :", error);
    }
    };
  
    return (
        
      <div>
             <Header />

            <div className="add-vehicle">

            <main>
                <form onSubmit={handleSubmit} className="vehicle-form">
                    <label htmlFor="vehicle">Véhicule :</label>
                    <input
                    type="text"
                    id="vehicle"
                    onChange={(e) => setVehicle(e.target.value)}
                    required
                    />

                    <label htmlFor="image">Image :</label>
                    <input
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.value)}
                    required
                    />
                
                    <label htmlFor="history" >Historique :</label>
                    <textarea
                    id="history"
                    onChange={(e) => setHistory(e.target.value)}
                    required
                    ></textarea>
                
                    <label htmlFor="price">Prix :</label>
                    <input
                    type="number"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />

                    <label htmlFor="video">Film / Série</label>
                    <input
                    type="text"
                    id="videoId"
                    onChange={(e) => setVideo(e.target.value)}
                    required
                    />
                
                    <label htmlFor="fuelId">carburant :</label>
                    <input
                    type="number"
                    id="fuelId"
                    onChange={(e) => setFuelId(e.target.value)}
                    required
                    />
                
                <label htmlFor="Type">Type de véhicule</label>
                    <input
                    type="number"
                    id="videoId"
                    onChange={(e) => setTypeId(e.target.value)}
                    required
                    />
                                      
                    
                
                <button type="submit" className="vehicle-submit">Ajouter le véhicule</button>
                </form>
                 
            </main>
          </div>

          <Footer/> 
      </div>  
    );
  };

export default AddVehicle;