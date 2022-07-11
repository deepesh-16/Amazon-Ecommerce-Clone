import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
function Scroll() {
  return <div>
      <Carousel>
                <Carousel.Item interval={2000}>
                    <img  className="pic d-block w-100" src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg" />
                </Carousel.Item >
                <Carousel.Item interval={2000}>
                    <img  className="pic d-block w-100" src="https://m.media-amazon.com/images/I/517FCkK6nZL._SX3000_.jpg" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img  className="pic d-block w-100" src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" />
                </Carousel.Item>
            </Carousel>
  </div>;
}

export default Scroll;
