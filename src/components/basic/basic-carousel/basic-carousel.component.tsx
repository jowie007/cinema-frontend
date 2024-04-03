import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./basic-carousel.styles.scss";
import { BasicCarouselProps } from "./basic-carousel.types";

// TODO Add custom arrow buttons:
// https://github.com/YIZHUANG/react-multi-carousel
export function BasicCarousel({ responsive, children }: BasicCarouselProps) {
  return children ? (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
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
