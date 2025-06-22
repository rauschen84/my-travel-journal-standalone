import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ images }) {
  
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={handlePrev}>‹</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} className="carousel-image" />
      <button className="carousel-btn" onClick={handleNext}>›</button>
    </div>
  );
}
