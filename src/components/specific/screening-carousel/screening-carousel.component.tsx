import { BasicCarousel } from "../../basic/basic-carousel";
import { ScreeningGrid } from "../../specific/screening-grid";
import "./screening-carousel.styles.scss";
import { ScreeningCarouselProps } from "./screening-carousel.types";

const SPACING = 450;

const RESPONSIVE = {
  four: {
    breakpoint: { max: SPACING * 500, min: SPACING * 4 },
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

export function ScreeningCarousel({
  roomsWithFilmsAndScreenings,
}: ScreeningCarouselProps) {
  // TODO Error handling
  return (
    <BasicCarousel responsive={RESPONSIVE}>
      {roomsWithFilmsAndScreenings &&
        roomsWithFilmsAndScreenings.roomsWithScreenings &&
        roomsWithFilmsAndScreenings.roomsWithScreenings?.map(
          (roomWithScreenings, index) =>
            roomsWithFilmsAndScreenings.films !== undefined &&
            roomWithScreenings.room !== undefined &&
            roomWithScreenings.basicScreenings !== undefined && (
              <div className="homePageRoomsItem" key={index}>
                <ScreeningGrid
                  key={index}
                  room={roomWithScreenings.room}
                  screenings={roomWithScreenings.basicScreenings}
                  films={roomsWithFilmsAndScreenings.films}
                />
              </div>
            )
        )}
    </BasicCarousel>
  );
}
