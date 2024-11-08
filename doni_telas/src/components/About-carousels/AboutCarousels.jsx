import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function TextCarousel() {
  const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};


  return (
    <div className='main-fedbacks'>
      <h3 className='title-fedbacks'>Opiniões de clientes</h3>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={4000} slide={false} className='bg-dark text-white rounded'>
        <Carousel.Item>
          <div className="carousel-text">
            <h3>Claúdio</h3>
            <p>Exelente profissional.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-text">
            <h3>Jorge</h3>
            <p>Serviço de qualidade</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-text">
          <h3>Cristiano</h3>
          <p>Serviço de qualidade</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TextCarousel;
