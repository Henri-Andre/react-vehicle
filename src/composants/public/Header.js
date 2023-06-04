import { faBars, faUserPlus, faTruckPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ModalLogin from '../../login/ModalLogin';

const Header = () => {




    return (
        <header>

            <div  className="logo">

                <NavLink to="/" ><img src="/img/logo.png"/></NavLink>

                
            </div>


           <div className="menu">


                    <nav className='navigator'>
                        <ul>
                            <li>
                                <NavLink to="/" >Acceuil</NavLink>
                            </li>

                            <li className="dropdown">
                                <NavLink to="/vehicles" >Véhicules</NavLink>
                                <div className="dropdown-content">
                                    <NavLink to="/vehicles/type/2">Voiture</NavLink>
                                    <NavLink to="/vehicles/type/1">Moto</NavLink>
                                    
                                </div>
                            </li>

                            <li>
                                <NavLink to="/contact" >Contact</NavLink>
                            </li>
                        </ul>

                    </nav>        

                            
                    <div class="user-menu">
                        <nav class="user">
                            <ul>
                                <li><ModalLogin/></li>
                                <li><a href="/sign-up"><FontAwesomeIcon icon={faUserPlus} />Sign up</a></li>
                            </ul>
                        </nav>
                    </div>

            </div> 
                   



             

                

        </header>
    );
};

export default Header;