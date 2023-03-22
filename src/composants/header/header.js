import React from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckPlane, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import ModalLogin  from '../login/ModalLogin';

const Header = () => {
    return (
        <header>

            <div  className="logo">

                <NavLink to="/acceuil" ><img src="img/logo.png"/></NavLink>

                <h1>Driver</h1>
            </div>


            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to="/acceuil" >Acceuil</NavLink>
                    </li>

                    <li>
                        <NavLink to="/vehicles" >Nos véhicules</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacte" >Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacte" >À propos</NavLink>
                    </li>

                </ul>

            </nav>


            <nav className='user'>
                <ul>
                    <li>
                        <ModalLogin/>
                    
                    </li>

                    <li>
                        <NavLink to="/sign-up" >
                            <FontAwesomeIcon icon={faUserPlus} />sign-up
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacte" >
                        <FontAwesomeIcon icon={faTruckPlane}/>Panier
                        </NavLink>
                    </li>


                </ul>

            </nav>

        </header>
    );
};

export default Header;