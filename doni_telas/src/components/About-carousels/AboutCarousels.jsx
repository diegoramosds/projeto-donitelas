import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function TextCarousel() {
  const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};


  return (
    <div className='main-fedbacks'>
      
    </div>
  );
}

export default TextCarousel;
