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


function IndividualIntervalsExample() {
  return (
    <div className='work-carousel'>
      <h3>Alguns serviços feitos</h3>
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={work1} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work2} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work3} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work4} alt="" />
          <Carousel.Caption>
            <h3>4 slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work5} alt="" />
          <Carousel.Caption>
            <h3>5 slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work6} alt="" />
          <Carousel.Caption>
            <h3>6 slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work7} alt="" />
          <Carousel.Caption>
            <h3>7 slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work8} alt="" />
          <Carousel.Caption>
            <h3>8 slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work9} alt="" />
          <Carousel.Caption>
            <h3>9 slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={work10} alt="" />
          <Carousel.Caption>
            <h3>10 slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;