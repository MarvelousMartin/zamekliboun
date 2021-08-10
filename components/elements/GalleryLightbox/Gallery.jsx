import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Lightbox from "components/elements/GalleryLightbox/Lightbox";

const Gallery = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const [isOpen, setIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="relative h-48 lg:h-96 flex justify-center items-center select-none mb-6 shadow-lg">
      <div className="absolute z-10 flex bottom-4 space-x-1">
        {images.map((slide, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                index === current
                  ? "bg-damask-700"
                  : "bg-gray-300 hover:bg-gray-200"
              }`}
            />
          );
        })}
      </div>
      <div
        className="absolute z-10 left-6 bg-damask-700 p-3 rounded-full flex w-6 h-6 lg:w-8 lg:h-8 justify-center items-center cursor-pointer hover:bg-damask-600"
        onClick={prevSlide}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="xs"
          className="text-white"
        />
      </div>
      <div
        className="absolute z-10 right-6 bg-damask-700 p-3 rounded-full flex w-6 h-6 lg:w-8 lg:h-8 justify-center items-center cursor-pointer hover:bg-damask-600"
        onClick={nextSlide}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          className="text-white"
        />
      </div>
      {images.map((image, index) => {
        return (
          <div
            className={`transition-opacity delay-0 duration-700 ${
              index === current ? "opacity-1" : "opacity-0"
            }`}
            key={index}
          >
            {index === current && (
              <Image
                src={image.source}
                alt={image.alt}
                className="cursor-pointer"
                layout="fill"
                objectFit="cover"
                loading="eager"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        );
      })}
      <Lightbox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        image={images[current].source}
        alt={images[current].alt}
      />
    </section>
  );
};

export default Gallery;
