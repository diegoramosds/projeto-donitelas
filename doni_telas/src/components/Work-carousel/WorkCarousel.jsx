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

const captions = [
  { title: "Campo", description: "Montagem completa de campo com redes." },
  { title: "Campo", description: "Montagem completa de campo com acabamento de madeira e redes." },
  { title: "Campo society", description: "Montagem completa de campo society com instalação de telas." },
  { title: "Quadra esportiva", description: "Instalação de telas e acabamentos gerais." },
  { title: "Cerca", description: "Instalação de cerca com acabamento em madeira." },
  { title: "Quadra esportiva", description: "Montagem completa de quadra esportiva e instalação de telas." },
  { title: "Tela", description: "Instalação de tela e acabamentos em campo society." },
  { title: "Cerca", description: "Instalação de cerca com canaleta mourão de concreto." },
  { title: "Cerca", description: "Instalação de cerca com canaleta mourão de madeira." },
  { title: "Tela", description: "Instalação de tela e acabamentos." },
];

function WorkCarousel() {
  return (
    <div className="work-carousel">
      <h3>Alguns serviços feitos</h3>
      <Carousel slide={false}>
        {captions.map((caption, index) => (
          <Carousel.Item key={index}>
            <img
              src={[work1, work2, work3, work4, work5, work6, work7, work8, work9, work10][index]}
              alt={caption.title}
            />
            {/* <Carousel.Caption className='caption'>
              <h3>{caption.title}</h3>
              <p>{caption.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default WorkCarousel;

