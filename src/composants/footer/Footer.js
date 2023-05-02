
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
    return (
        <footer>
        <div className="logo">
          <p>© 2023 Vroum Company.</p>
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
            <li><a href="https://www.facebook.com">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                  <title></title>
                  <g id="icomoon-ignore">
                  </g>
                 <path fill="#1877f2" d="M1023.919 511.962c0-282.748-229.21-511.962-511.957-511.962s-511.962 229.214-511.962 511.962c0 255.535 187.217 467.332 431.966 505.741v-357.751h-129.988v-147.989h129.988v-112.794c0-128.311 76.433-199.185 193.374-199.185 56.013 0 114.603 10.001 114.603 10.001v125.99h-64.555c-63.599 0-83.435 39.462-83.435 79.949v96.038h141.99l-22.699 147.989h-119.292v357.751c244.753-38.409 431.966-250.206 431.966-505.741z"></path>
                </svg>
              </a></li>
            
            <li><a href="https://twitter.com">
                   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <title></title>
                    <g id="icomoon-ignore">
                     </g>
                    <path fill="#1da1f2" d="M1022.037 194.944c-37.76 16.597-78.080 27.904-120.533 33.067 43.264-26.069 76.544-67.157 92.288-116.181-40.576 23.68-85.547 40.917-133.419 50.517-38.229-40.917-92.715-66.517-153.216-66.517-115.925 0-209.92 93.995-209.92 209.792 0 16.64 1.92 32.64 5.419 47.957-174.507-8.235-329.173-92.032-432.683-218.709-18.219 30.805-28.416 66.603-28.416 105.6 0 72.96 37.12 137.088 93.355 174.763-34.432-1.109-66.816-10.581-95.061-26.283v2.603c0 101.76 72.235 186.624 168.363 205.952-17.621 4.736-36.224 7.296-55.296 7.296-13.397 0-26.24-1.28-39.083-3.669 26.923 83.328 104.32 144.085 196.437 145.792-71.68 56.277-162.517 89.813-260.352 89.813-16.64 0-33.237-0.981-49.92-2.859 93.397 59.477 203.435 94.251 322.432 94.251 386.304 0 597.291-319.829 597.291-596.736 0-8.917 0-17.92-0.64-26.88 41.003-29.397 76.8-66.56 104.96-108.715z"></path>
                  </svg>


              </a></li>
            <li><a href="https://www.instagram.com">

                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
                    <title></title>
                    <g id="icomoon-ignore">
                    </g>
                    <path fill="#000" d="M224 32c-53.024 0-101.056 21.536-135.776 56.224s-56.224 82.752-56.224 135.776v320c0 53.024 21.536 101.056 56.224 135.776s82.752 56.224 135.776 56.224h320c53.024 0 101.056-21.536 135.776-56.224s56.224-82.752 56.224-135.776v-320c0-53.024-21.536-101.056-56.224-135.776s-82.752-56.224-135.776-56.224zM224 96h320c35.36 0 67.296 14.304 90.496 37.504s37.504 55.136 37.504 90.496v320c0 35.36-14.304 67.296-37.504 90.496s-55.136 37.504-90.496 37.504h-320c-35.36 0-67.296-14.304-90.496-37.504s-37.504-55.136-37.504-90.496v-320c0-35.36 14.304-67.296 37.504-90.496s55.136-37.504 90.496-37.504zM543.648 359.136c-4.8-31.104-18.272-59.424-38.208-82.144-24.128-27.552-57.728-46.88-96.288-52.608-14.848-2.368-31.040-2.464-47.264-0.064-43.712 6.464-80.672 30.112-105.024 62.944s-36.256 75.104-29.76 118.784 30.112 80.672 62.944 105.024 75.104 36.256 118.784 29.76 80.672-30.112 105.024-62.944 36.256-75.104 29.76-118.784zM480.352 368.544c3.904 26.24-3.2 51.488-17.856 71.264s-36.8 33.888-63.008 37.76-51.488-3.2-71.264-17.856-33.888-36.8-37.76-63.008 3.2-51.488 17.856-71.264 36.8-33.888 63.008-37.76c10.016-1.472 19.68-1.344 27.84-0.064 23.68 3.52 43.712 15.040 58.176 31.552 12 13.696 20.16 30.816 23.040 49.376zM560 240c17.664 0 32-14.336 32-32s-14.336-32-32-32-32 14.336-32 32 14.336 32 32 32z"></path>
                  </svg>
                          
              </a></li>
          </ul>
        </div>
      </footer>
    );
};

export default Footer;