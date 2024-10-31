import React from 'react';
import Slider from 'react-slick';

const imageSlides = [
  {
    id: 1,
    src: '/assets/images/AFI_Plane.jpg', // Replace with your actual image URLs
    alt: 'Image 1',
  },
  {
    id: 2,
    src: '/assets/images/AFI Ad bundle.png',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/800x400?text=Image+3',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/800x400?text=Image+4',
    alt: 'Image 4',
  },
];

const CarouselImages: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // You can enable/disable navigation arrows
    customPaging: (i: number) => (
      <div className="dot">
        <div className={`inner-dot ${i === 0 ? 'active' : ''}`}></div>
      </div>
    ),
    appendDots: (dots: any) => (
      <div style={{ padding: '10px', bottom: '20px', position: 'absolute', left: '0', right: '0' }}>
        <ul style={{ margin: '0', padding: '0', display: 'flex', justifyContent: 'center' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {imageSlides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.src} alt={slide.alt} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselImages;
