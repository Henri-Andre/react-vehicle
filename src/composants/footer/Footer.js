
import React from 'react';
const Footer = () => {
    return (
        <footer>
        <div className="logo">
          <p>© 2023 Nom de l'entreprise. Tous droits réservés.</p>
        </div>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À propos de nous</a></li>
            <li><a href="/voitures">Voitures</a></li>
            <li><a href="/motos">Motos</a></li>
            <li><a href="/camions">Bateau</a></li>
            <li><a href="/contact">Contactez-nous</a></li>
          </ul>
        </nav>
        <div className="contact">
          <p>07 49 12 34 56</p>
          <p> vroum@drive.com</p>
        </div>
        <div className="social">
          <p>Suivez-nous sur les réseaux sociaux</p>
          <ul>
            <li><a href="https://www.facebook.com/nomdelentreprise">Facebook</a></li>
            <li><a href="https://twitter.com/nomdelentreprise">Twitter</a></li>
            <li><a href="https://www.instagram.com/nomdelentreprise">Instagram</a></li>
          </ul>
        </div>
      </footer>
    );
};

export default Footer;