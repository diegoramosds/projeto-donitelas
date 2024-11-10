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
    <p>Excelente profissional, atencioso e comprometido com cada detalhe do serviço.</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>Jorge</h3>
    <p>Serviço de qualidade e ótimo atendimento. Muito satisfeito com o resultado!</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>Cristiano</h3>
    <p>Trabalho bem executado, com cuidado e precisão. Recomendo totalmente.</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>Marcos</h3>
    <p>Profissional competente e confiável, entregou exatamente o que eu esperava.</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>André</h3>
    <p>Ótimo serviço, realizado com qualidade e dentro do prazo combinado.</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>Cristiano</h3>
    <p>Trabalho impecável e excelente relação custo-benefício. Voltarei a contratar!</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>Maurílio</h3>
    <p>Profissional de confiança, com uma execução de qualidade e atendimento rápido.</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>Diego</h3>
    <p>Atendimento incrível e resultado acima das expectativas. Parabéns pelo ótimo serviço!</p>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="carousel-text">
    <h3>Bruno</h3>
    <p>Serviço excelente, com atenção aos detalhes e um acabamento impecável.</p>
  </div>
</Carousel.Item>

      </Carousel>
    </div>
  );
}

export default TextCarousel;
