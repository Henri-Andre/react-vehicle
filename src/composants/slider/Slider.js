import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getRequest } from '../../api/api';
import { NavLink } from 'react-router-dom';

const Slider = () => {

    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = '/vehicles/all'
            const response = await getRequest(url);
            setData(response.result.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      console.log(data);

    


    
    return (

      <Carousel>
      {data.slice(data.length - 5, data.length).map((slide) => (
        <article
          key={slide.id}
          className={`slide`}
        >
          <img src={'./img/' + slide.image} alt={slide.vehicle} />
          <div className="overlay">
            <h3>{slide.vehicle}</h3>
            <NavLink to={'/vehicles_id/' + slide.id}>En Savoir plus</NavLink>
          </div>
        </article>
      ))}
    </Carousel>

       
        
    );
};

export default Slider;