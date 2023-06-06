import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminHeader from '../composants/admin/Header';
import Footer from '../composants/footer/Footer';
import PublicHeader from '../composants/public/Header';
import Slider from '../composants/slider/Slider';
import { accountService } from '../service/account';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRequest } from '../api/api';

const Home = () => {

    const isLoggedIn = accountService.logged();




  

    
    return (
        <div className='acceuil'>
            {isLoggedIn ? <AdminHeader/> : <PublicHeader/>}
            
            <main>
                <h1>Acceuil</h1>

                <section>

                  <h2>Nouveautés</h2>

                 
                  <Slider/>



                  <NavLink to="/vehicles" aria-label="Voir tous les véhicules">Tous les véhicules</NavLink>

                </section>

                <section>

                    <h3>Comment ça marche</h3>


                    <div className='comment'aria-label="Comment ça marche">
 
                        <article>
                            <h4>30 jours de Bonheurs</h4>
                            <img src="./img/acceuil1.jpg" alt="Image  30 jours de Bonheurs" />
                            <p>Votre voiture, vous l’essayez 30 jours plutôt que 30 minutes en concession. Vous êtes satisfait intégralement ou remboursé intégralement.</p>
                        </article>

                        <article>
                            <h4>Où, quand et comme vous voulez</h4>
                            <img src="./img/acceuil3.jpg" alt="Image Où, quand et comme vous voulez" />
                            <p>Bien installé dans votre canapé, commandez votre voiture depuis notre site. Ou appelez-nous. Ou passez en agence. Tout est possible.</p>
                        </article>

                        <article>
                            <h4>Livraison en 48h</h4>
                            <img src="./img/acceuil2.jpg" alt="Image  Livraison en 48h" />
                            <p>Votre voiture se commande en 1 clic et se reçoit en 2 jours. Chez vous.</p>
                        </article>
                    </div>


                </section>




                   
                </main>


            <Footer/> 

        </div>
    );
};

export default Home;