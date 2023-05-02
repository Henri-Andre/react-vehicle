import { faBars, faUserPlus, faTruckPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ModalLogin from '../../login/ModalLogin';

const Header = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };  


    return (
        <header>

            <div  className="logo">

                <NavLink to="/" ><img src="/img/logo.png"/></NavLink>

                
            </div>


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

                    <li>
                        <div className="burger-menu">
                            <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={handleMenuClick} />
                                {isMenuOpen && (
                                    <nav className="menu-items">
                                    <ul>
                                        <li><ModalLogin/></li>
                                        <li><NavLink to="/sign-up"><FontAwesomeIcon icon={faUserPlus} />sign-up</NavLink></li>
                                        <li><NavLink to="/panier"><FontAwesomeIcon icon={faTruckPlane}/>Panier</NavLink></li>
                                    </ul>
                                </nav>
                            )}
                        </div>
                    </li>



                </ul>

            </nav>

                

        </header>
    );
};

export default Header;