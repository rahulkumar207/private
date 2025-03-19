import React, { useState, useEffect } from 'react';

const CarouselImage = ({ src, alt, isActive }) => (
  <div className={`carousel-item ${isActive ? 'active' : ''}`}>
    <img src={src} alt={alt} className="d-block w-100" />
  </div>
);

const Carousel = ({ productData }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = productData?.carousel || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel" style={{marginTop:90}}>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to={index}
            className={currentImage === index ? 'active' : ''}
            aria-current={currentImage === index ? 'true' : 'false'}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            src={image}
            alt={`${productData?.title || 'Product'} Image ${index + 1}`}
            isActive={currentImage === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
