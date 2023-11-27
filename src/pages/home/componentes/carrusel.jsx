import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carrusel.css';
import BasicButtons from './Button';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    draggable: false,
  };



  return (
      <div className='master'>
        <div className='sliderWrapper'>
          <Slider {...settings}> 
              <div className='imageStyle'>
                {/* Contenido de la primera foto */}
                <img
                  src="https://st1.uvnimg.com/a5/86/107a95794229b6bebaf3a92703fe/nino-kid-friendly-utensilios-cocina.png"
                  alt="Primera Foto"
                />
              </div>
              <div className='imageStyle'>
                {/* Contenido de la segunda foto */}
                <img
                  src="https://blog.oncosalud.pe/hubfs/shutterstock_103838264.jpg"
                  alt="Segunda Foto"
                />
              </div>
              <div className='imageStyle'>
                {/* Contenido de la tercera foto */}
                <img
                  src="https://blog.oncosalud.pe/hubfs/shutterstock_364115975.jpg"
                  alt="tercera Foto"
                />
              </div>
              <div className='imageStyle'>
                {/* Contenido de la cuarta foto */}
                <img
                  src="https://elestimulo.com/wp-content/uploads/2015/05/comer-en-familia.jpg"
                  alt="cuarta Foto"
                />
              </div>
              <div className='imageStyle'>
                {/* Contenido de la quinta foto */}
                <img
                  src="https://blog.oncosalud.pe/hubfs/postres%20saludables-1.jpg"
                  alt="quinta Foto"
                />
              </div>
          </Slider>
        </div>
        <div className='centeredContainer'>
          <div className='LogoWrapper'>
            <img src='/image.png' alt='titulo'/>
          </div>
          <div className='Titulo'>
            <img src='/Texto.png' alt='descripcion'/>
          </div>
          <div>
          <Link to={`/recetas`}>
            <BasicButtons/>
          </Link>
          </div>
        </div>
      </div>
  );
};

export default Carousel;
