import React, { useState, useEffect } from 'react';

const ImageSwapper = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false); // Start fading out

            setTimeout(() => {
                if (currentIndex === images.length - 1) {
                    setCurrentIndex(0); // Reset to the first image
                } else {
                    setCurrentIndex(currentIndex + 1); // Move to the next image
                }
                setIsVisible(true); // Start fading in after changing the image
            }, 1000); // Match the fade-out duration (1s)
        }, 5000); // Image swap interval

        return () => clearInterval(intervalId);
    }, [currentIndex, images]);

    return (
        <div className="w-full h-auto">
            <img
                src={images[currentIndex]}
                alt="Swapping images"
                className={`w-full h-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

export default ImageSwapper;
