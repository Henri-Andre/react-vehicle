import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { accountService } from '../../service/account';




const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

      

const logout = async () =>{
    
    window.location.replace(`http://localhost:3000`);
    const token = accountService.logout();
}

    return (
        <header>

        <div className="logo">
            <NavLink to="/">
                <img src="/img/logo.png" alt="Logo de la société Vroum Company" />
            </NavLink>
        </div>

        <div className="menu">


        <nav className="navigator" role="navigation" aria-label="Menu principal">
                <ul>
                    <li>
                        <NavLink to="/" >Acceuil</NavLink>
                    </li>

                    <li className="dropdown">
                        <NavLink to="/vehicles" >Véhicules</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/vehicles/type/2">Voitures</NavLink>
                            <NavLink to="/vehicles/type/1">Motos</NavLink>
                            
                        </div>
                    </li>
                

                        <li>
                            <NavLink to="/contact" >Contact</NavLink>
                        </li>
                </ul>

            </nav>
 

                
                <div className="user-log">
                            
                    <nav className="user">
                        <ul>
                        <div className="burger-menu">
                                <FontAwesomeIcon icon={faUser} onClick={toggleMenu} />

                                {isOpen && (
                                    <ul className="menu-items">
                                        <li>
                                            <NavLink to="/profile">Mon Profil</NavLink>
                                        </li>
                                        <li>
                                            <button onClick={logout} className="btndc">Se déconnecter</button>
                                        </li>
                                    </ul>
                                )}
                        </div> 
                            
                            <li>
                                <NavLink to="/shop" aria-label="Aller à la page d'achat">
                                <FontAwesomeIcon icon={faCartShopping} />
                                </NavLink>
                            </li> 
                        </ul>
                    </nav>
                       
                </div>
        </div>                
                



          
    </header>   
    );
};

export default Header;