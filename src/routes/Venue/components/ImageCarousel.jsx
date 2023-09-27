import React, { useState } from "react";
import {
  Arrow,
  ArrowContainer,
  CarouselContainer,
  ImageIndex,
  VenueImg,
} from "../styled";

export function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <VenueImg
        src={images[currentIndex]}
        alt=""
      />
      <ArrowContainer>
        <Arrow onClick={prevImage}>&lt;</Arrow>
        <Arrow onClick={nextImage}>&gt;</Arrow>
      </ArrowContainer>
      <ImageIndex>
        Image {currentIndex + 1}/{images.length}
      </ImageIndex>
    </CarouselContainer>
  );
}
