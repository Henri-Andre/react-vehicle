
import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
        <div className="logo">
          <p>© 2023 Nom de l'entreprise. Tous droits réservés.</p>
        </div>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><NavLink to="/vehicles/type/2">Voiture</NavLink></li>    
            <li> <NavLink to="/vehicles/type/1">Moto</NavLink></li>   
            <li><a href="/contact">Contactez-nous</a></li>
          </ul>
        </nav>
        <div className="contact">
          <p>07 49 12 34 56</p>
          <a href='#'>vroum@drive.com</a>
        </div>
        <div className="social">
          <p>Suivez-nous sur les réseaux sociaux</p>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </div>
      </footer>
    );
};

export default Footer;