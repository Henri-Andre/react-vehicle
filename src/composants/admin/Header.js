import { faBars, faTruckPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { accountService } from '../../service/account';




const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };    


      

const logout = async () =>{
    
    window.location.replace(`http://localhost:3000`);
    const token = accountService.logout();
}

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
                    <NavLink to="/vehicles" >Nos véhicules</NavLink>
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
                                    <li><button onClick={logout} className='btndc'>se déconnecter</button></li>
                                    <li><NavLink to="/contacte"><FontAwesomeIcon icon={faTruckPlane}/>Panier</NavLink></li> 
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