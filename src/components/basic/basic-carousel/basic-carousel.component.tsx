import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./basic-carousel.styles.scss";
import { BasicCarouselProps } from "./basic-carousel.types";

const SPACING = 450;

const RESPONSIVE = {
  four: {
    breakpoint: { max: SPACING * 5, min: SPACING * 4 },
    items: 4,
  },
  three: {
    breakpoint: { max: SPACING * 4, min: SPACING * 3 },
    items: 3,
  },
  two: {
    breakpoint: { max: SPACING * 3, min: SPACING * 2 },
    items: 2,
  },
  one: {
    breakpoint: { max: SPACING * 2, min: 0 },
    items: 1,
  },
};

export function BasicCarousel({ children }: BasicCarouselProps) {
  return children ? (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={RESPONSIVE}
      infinite={false}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
    >
      {children}
    </Carousel>
  ) : (
    <></>
  );
}
