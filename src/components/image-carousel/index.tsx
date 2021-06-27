import React, {useEffect, useRef, useState} from "react";

export type ImageType = {
    id: number;
    backgroundImageUrl: string;
    content: JSX.Element;
};

const ImageCarousel: React.FC<{ slides?: ImageType[] }> = ({slides}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<ImageType>();

    useEffect(() => {
        if (slides && slides[0]) {
            setSelectedImageIndex(0);
            setSelectedImage(slides[0]);
        }
    }, [slides]);

    const handleSelectedImageChange = (newIdx: number) => {
        if (slides && slides.length > 0) {
            setSelectedImage(slides[newIdx]);
            setSelectedImageIndex(newIdx);
        }
    };

    return (
        <div className="carousel-container">
            {slides &&
            slides.map((image, idx) => (
                <div
                    key={`slide${idx}`}
                    className={`${idx === selectedImageIndex ? '' : 'hidden'} selected-image`}
                    style={{backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.3),rgba(0,0,0,0)),url(${slides[idx]?.backgroundImageUrl})`}}
                >
                    <div className="slide-content">
                        {image.content}
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
    );
};

export default ImageCarousel;
