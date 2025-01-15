'use client'
import { useEffect, useState } from "react";

const PremiumCarousel = () => {
    const images = [
        "https://apbhacademy.com/img/banners/slider/1.jpg",
        "https://apbhacademy.com/img/banners/slider/2.jpg",
        "https://apbhacademy.com/img/banners/slider/3.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full mt-24 lg:h-[623px] h-[350px] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={image}
                        alt={`Carousel ${index + 1}`}
                        className="w-full h-full object-fit"
                        style={{ objectFit: "fill" }} // Ensures the image completely fills the container
                    />
                </div>
            ))}
        </div>
    );
};

export default PremiumCarousel;
