import React from 'react';
import AdminHeader from '../composants/admin/Header';
import Footer from '../composants/footer/Footer';
import PublicHeader from '../composants/public/Header';
import { accountService } from '../service/account';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRequest } from '../api/api';
import { NavLink } from 'react-router-dom';


const VehicleByType = () => {

    const { type_id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = `/vehicles/type/${type_id}`;
            const response = await getRequest(url);
            setData(response.result.data);
            
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [type_id]);
      
            //console.log(data);
    
      
          const isLoggedIn = accountService.logged();
    
          
          const model = [...new Set(data.map(vehicle => vehicle.Type))];
          const type = [...new Set(model.map(types => types.type))];
;
          console.log(type);
    
        
        return (
            <div >
                {isLoggedIn ? <AdminHeader/> : <PublicHeader/>}


                <main>

                  <h2>Nos {type}</h2>

                <section className='card_container'>

                {data.map((vehicles) => (

                <article key={vehicles.id} className='card_vehicle'>
                <img src={'/img/' + vehicles.image} alt={vehicles.vehicle} />
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


export default VehicleByType;