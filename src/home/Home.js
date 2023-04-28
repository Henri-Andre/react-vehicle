import React, { useEffect, useState } from 'react';
import { getRequest } from '../api/api';
import AdminHeader from '../composants/admin/Header';
import Footer from '../composants/footer/Footer';
import PublicHeader from '../composants/public/Header';
import { accountService } from '../service/account';
import Slider from '../composants/slider/Slider';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const isLoggedIn = accountService.logged();




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

  

    
    return (
        <div className='acceuil'>
            {isLoggedIn ? <AdminHeader/> : <PublicHeader/>}
            
            <main>
                <h2>Acceuil</h2>

                <section>

                  <h3>Nos Selections</h3>

                 
                  <Slider/>



                  <NavLink to="/vehicules" >Tous les vehicules</NavLink>

                </section>

                <section>

                      <h3>Comment ça marche</h3>


                      <div className='comment'>

                          <article>

                                <h4>30 jours de Bonheurs</h4>
                                <img src="./img/acceuil1.jpg" alt="" />

                                <p>Votre voiture, vous l’essayez 30 jours plutôt que 30 minutes en concession. Vous êtes satisfait intégralement ou remboursé intégralement.</p>

                          </article>

                          <article>

                                <h4>Où, quand et comme vous voulez</h4>
                                <img src="./img/acceuil3.jpg" alt="" />

                                <p>
                                  Bien installé dans votre canapé, commandez votre voiture depuis notre site.
                                  Ou appelez-nous. Ou passez en agence. Tout est possible.
                                </p>



                          </article>

                          <article>

                                <h4>Livraison en 48h</h4>
                                <img src="./img/acceuil2.jpg" alt="" />

                                <p>Votre voiture se commande en 1 clic et se reçoit en 2 jour. Chez vous </p>

                          </article>

                      </div>


                </section>




                   
                </main>


            <Footer/>

        </div>
    );
};

export default Home;