import { faTruckPlane, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from "react-router-dom";
import ModalLogin from '../../login/ModalLogin';

const Header = () => {
        


    return (
        <header>

            <div  className="logo">

                <NavLink to="/" ><img src="img/logo.png"/></NavLink>

                
            </div>


            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to="/" >Acceuil</NavLink>
                    </li>

                    <li className="dropdown">
                        <NavLink to="/vehicules" >Nos véhicules</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/vehicules/voiture">Voiture</NavLink>
                            <NavLink to="/vehicules/moto">Moto</NavLink>
                            <NavLink to="/vehicules/bateau">Bateau</NavLink>
                        </div>
                     </li>

                    <li>
                        <NavLink to="/contact" >Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacte" >À propos</NavLink>
                    </li>

                </ul>

            </nav>


            <nav className="user">
                <div className="burger-menu">
                    <div className="burger-menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                    <div className="burger-menu-items">
                    <ul>
                        <li><ModalLogin/></li>
                        <li><NavLink to="/sign-up"><FontAwesomeIcon icon={faUserPlus} />sign-up</NavLink></li>
                        <li><NavLink to="/contacte"><FontAwesomeIcon icon={faTruckPlane}/>Panier</NavLink></li>
                    </ul>
                    </div>
                </div>
                
            </nav>

        </header>
    );
};

export default Header;