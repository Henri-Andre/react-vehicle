import React, { useEffect, useState } from 'react';
import AdminHeader from '../composants/admin/Header';
import Footer from '../composants/footer/Footer';
import PublicHeader from '../composants/public/Header';
import { accountService } from '../service/account';
import { getRequest } from '../api/api';
import { NavLink } from 'react-router-dom';

const Vehicule = () => {

    



    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = '/vehicles/all'
            const response = await getRequest(url);
            setData(response.result.data);
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      console.log(data);


      const isLoggedIn = accountService.logged();





  

    
      return (
          <div >
              {isLoggedIn ? <AdminHeader/> : <PublicHeader/>}
        
                <main>

                <h2>Nos vehicules</h2>


                <section className='card_container'>

                {data.map((vehicles) => (
                <article key={vehicles.id} className='card_vehicle'>
                <img src={'./img/' + vehicles.image} alt="" />
                    <h3>{vehicles.vehicle}</h3>
                    <p>{vehicles.price}</p>
                    <button>Acheter</button>
                    <NavLink to={'/vehicles_id/' + vehicles.id}>En Savoir</NavLink>  
                </article>                                          
                ))}


                </section>

            </main>


            <Footer/>
        </div>
    );
};

export default Vehicule;