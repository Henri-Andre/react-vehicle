import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>

            <div  className="logo">

                <NavLink to="/acceuil" ><img src="./../../public/img/logo.png"/></NavLink>
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
                        <NavLink to="/contacte" >nous contacter</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacte" >À propos</NavLink>
                    </li>

                </ul>

            </nav>


            <nav className='user'>
                <ul>
                    <li>
                        <NavLink to="/login" >logo connecter</NavLink>
                    </li>

                    <li>
                        <NavLink to="/sing-up" >logo inscrire</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacte" >panier</NavLink>
                    </li>


                </ul>

            </nav>

        </header>
    );
};

export default Header;