import React from 'react';
import { Carousel } from 'react-bootstrap';

function slider() {
  return (
   <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.kawolegal.com/assets/img/office.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  
</Carousel>
   </div>
  );
}

export default slider;