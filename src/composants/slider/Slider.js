import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getRequest } from '../../api/api';
import { NavLink } from 'react-router-dom';

const Slider = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = '/vehicles/all'
            const response = await getRequest(url);
            setData(response.result.data);
            console.log(response.result);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      console.log(data);


        
   
    
    return (

        <Carousel>
            {data.slice(0, 6).map((slide) => (
                <article key={slide.id} className='slide'>
                <img src={'./img/' + slide.image} alt="" />
                <div className="overlay">
                    <h3>{slide.vehicle}</h3>
                    <NavLink to={'/vehicles/' + slide.id}>En Savoir</NavLink>  
                </div>  
                </article>                                          
            ))}
        </Carousel>

       
        
    );
};

export default Slider;