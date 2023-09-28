import React, { useState } from "react";
import {
  Arrow,
  ArrowContainer,
  CarouselContainer,
  ImageIndex,
  VenueImg,
} from "../styled";
import { Icon } from "../../../components/Icon";

export function ImageCarousel({ images, altText }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        alt={altText}
      />
      <ArrowContainer>
        <Arrow
          onClick={prevImage}
          title="previous">
          <Icon
            id="arrow-left"
            fill="var(--clr-white)"
            width="100%"
            height="100%"
          />
        </Arrow>
        <Arrow
          onClick={nextImage}
          title="next">
          <Icon
            id="arrow-right"
            fill="var(--clr-white)"
            width="100%"
            height="100%"
          />
        </Arrow>
      </ArrowContainer>
      <ImageIndex>
        Image {currentIndex + 1}/{images.length}
      </ImageIndex>
    </CarouselContainer>
  );
}
