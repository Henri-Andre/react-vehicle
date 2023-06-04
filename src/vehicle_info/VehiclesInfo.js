import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../api/api';
import AdminHeader from '../composants/admin/Header';
import Footer from '../composants/footer/Footer';
import PublicHeader from '../composants/public/Header';
import { accountService } from '../service/account';

const VehiclesInfo = () => {


    const {id} = useParams();
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = `/vehicles/${id}`;
            const response = await getRequest(url);
            setVehicles(response.result.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [id]);
    
          console.log(vehicles);
    
          const isLoggedIn = accountService.logged();





  

    
          return (
              <div >
                  {isLoggedIn ? <AdminHeader/> : <PublicHeader/>}


                    <main>
                    <section className='vehicleInfo'>
                        <h1>{vehicles.vehicle}</h1>
                        <img src={'/img/' + vehicles.image} alt={vehicles.vehicle} />

                        <strong>{vehicles.price} €</strong>

                        <button>Acheter</button>

                        <p>{vehicles.history}</p>


                    </section>


                    </main>
                        


                 


                <Footer/>
             </div>
    );
};

export default VehiclesInfo;