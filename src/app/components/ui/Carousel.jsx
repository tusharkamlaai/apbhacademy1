'use client'
import { useEffect, useState } from "react";
import Image from 'next/image';
import c1 from '../../assets/MainCar/c1.jpg'
import c2 from '../../assets/MainCar/c2.jpg'
import c3 from '../../assets/MainCar/c3.jpg'


const PremiumCarousel = () => {
    const images = [
        c1,
        c2,
        c3,
    ]
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full mt-24 lg:h-[650px] h-[350px] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                >

                    <Image
                        src={image}
                        alt={`Carousel ${index + 1}`}
                        className="w-full h-full object-fit"
                        style={{ objectFit: "fill" }} // Ensures the image completely fills the container
                    />

                    {/* <img
                        src={image}
                        alt={`Carousel ${index + 1}`}
                        className="w-full h-full object-fit"
                        style={{ objectFit: "fill" }} // Ensures the image completely fills the container
                    /> */}
                </div>
            ))}
        </div>
    );
};

export default PremiumCarousel;
