import React, {useEffect, useRef, useState} from "react";
import "./styles.css";

export type ISlide = {
  id: number;
  backgroundImageUrl: string;
  content: JSX.Element;
};

export interface ISlideshowProps {
  slides: ISlide[];
  delay?: number
}

const Slideshow: React.FC<ISlideshowProps> = ({slides, delay = 5000}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (slides && slides[0]) {
      setSelectedImageIndex(0);
    }
  }, [slides]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const totalSlides = slides.length;
      setSelectedImageIndex((selectedImageIndex + 1) % totalSlides)
    }, delay)
    return (() => clearTimeout(timeout));
  })

  const handleSelectedImageChange = (newIdx: number) => {
    if (slides && slides.length > 0) {
      setSelectedImageIndex(newIdx);
    }
  };

  return (
    <div className="full-height reset-margin">
      <div className="carousel-container full-height reset-margin">
        {slides &&
        slides.map((slide, idx) => (
          <div
            key={`slide${idx}`}
            className={`${idx === selectedImageIndex ? '' : 'hidden'} selected-image`}
            style={{backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${slides[idx]?.backgroundImageUrl})`}}
          >
            <div className="slide-content">
              {slide.content}
            </div>
          </div>
        ))}
        <div className="image-selector">
          {slides &&
          slides.map((image, idx) => (
            <div
              key={`slector${idx}`}
              onClick={() => handleSelectedImageChange(idx)}
              className={idx === selectedImageIndex ? 'selected' : ''}
            >
              {('0' + (idx + 1)).slice(-2)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
