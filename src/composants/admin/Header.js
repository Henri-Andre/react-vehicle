import { faTruckPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { accountService } from '../../service/account';
import { getRequest } from '../../api/api';




const Header = () => {

   


      

const logout = async () =>{
    
    window.location.replace(`http://localhost:3000`);
    const token = accountService.logout();
}

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
                        <NavLink to="/contacte" >Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacte" >À propos</NavLink>
                    </li>




                </ul>
            </nav>    

            <nav className='user'>
                <ul>
                    <li><button onClick={logout} className='btndc'>se déconnecter</button></li>
                    <li><NavLink to="/contacte"><FontAwesomeIcon icon={faTruckPlane}/>Panier</NavLink></li>
                </ul>

            </nav>    

            

        </header>    
    );
};

export default Header;