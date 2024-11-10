import Carousel from 'react-bootstrap/Carousel';

// images
import work1 from '../../img/work1.jpg';
import work2 from '../../img/work2.jpg';
import work3 from '../../img/work3.jpg';
import work4 from '../../img/work4.jpg';
import work5 from '../../img/work5.jpg';
import work6 from '../../img/work6.jpg';
import work7 from '../../img/work7.jpg';
import work8 from '../../img/work8.jpg';
import work9 from '../../img/work9.jpg';
import work10 from '../../img/work10.jpg';


function WorkCarousel() {
  return (
    <div className='work-carousel'>
      <h3>Alguns serviços feitos</h3>
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={work1} alt="" />
          <Carousel.Caption>
            <h3>Campo</h3>
            <p>Montagem completa de campo com redes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work2} alt="" />
          <Carousel.Caption>
            <h3>Campo</h3>
            <p>Montagem completa de campo com acabamento de madeira e redes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work3} alt="" />
          <Carousel.Caption>
            <h3>Cmapo society</h3>
            <p>
              Montagem completa de campo society com instalação de telas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work4} alt="" />
          <Carousel.Caption>
            <h3>Quadra esportiva</h3>
            <p>
              Instalação de telas e acabamentos gerais.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work5} alt="" />
          <Carousel.Caption>
            <h3>Cerca</h3>
            <p>
             Instalação de cerca com acabamento em madeira.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work6} alt="" />
          <Carousel.Caption>
            <h3>Quadra esportiva</h3>
            <p>
              Montagem completa de quadra esportiva e instalação de telas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work7} alt="" />
          <Carousel.Caption>
            <h3>Tela</h3>
            <p>
              Instalação de tela e acabamentos em campo society
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work8} alt="" />
          <Carousel.Caption>
            <h3>Cerca</h3>
            <p>
              Instalação de cerca com canaleta mourão de concreto.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work9} alt="" />
          <Carousel.Caption>
            <h3>Cerca</h3>
            <p>
            Instalação de cerca com canaleta mourão de madeira.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work10} alt="" />
          <Carousel.Caption>
            <h3>Tela</h3>
            <p>
            Instalação de tela e acabamentos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WorkCarousel;