import { useMemo } from "react";
import { useFilmControllerServiceFindAll1 } from "../../../openapi/queries";
import { BasicCarousel } from "../../basic/basic-carousel";
import { FilmPoster } from "../film-poster";
import "./film-carousel.styles.scss";
import { Breakpoints } from "../../../hooks/use-breakpoints";

const getResponsive = (itemCount: number) => ({
  three: {
    breakpoint: { max: 100000, min: Breakpoints.desktop },
    items: itemCount < 6 ? itemCount : 6,
  },
  two: {
    breakpoint: { max: Breakpoints.desktop, min: Breakpoints.tablet },
    items: itemCount < 3 ? itemCount : 3,
  },
  one: {
    breakpoint: { max: Breakpoints.tablet, min: 0 },
    items: 1,
  },
});

export function FilmCarousel() {
  const { data: films } = useFilmControllerServiceFindAll1({
    isOnlyFutureFilms: true,
  });

  const carouselContent = useMemo(
    () => films?.map((film, index) => <FilmPoster key={index} film={film} />),
    [films]
  );

  return (
    <div className="filmCarousel">
      {films && carouselContent && (
        <BasicCarousel responsive={getResponsive(films?.length)}>
          {carouselContent}
        </BasicCarousel>
      )}
    </div>
  );
}
