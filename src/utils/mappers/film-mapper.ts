import { FilmWithScreenings, Screening } from "../../openapi/requests";

export const filmsWithScreeningsToScreeningsWithFilm = (
  filmsWithScreenings: FilmWithScreenings[]
): Screening[] => {
  return filmsWithScreenings.reduce<Screening[]>(
    (screenings, filmWithScreenings) => {
      if (filmWithScreenings.screenings) {
        return [
          ...screenings,
          ...filmWithScreenings.screenings.map((screening) => ({
            ...screening,
            film: filmWithScreenings.film,
          })),
        ];
      } else {
        return screenings;
      }
    },
    []
  );
};

export const getRoomsFromScreenings = (screenings: Screening[]) => {
  console.log("getRoomsFromScreenings", screenings);
  return Array.from(new Set(screenings.map((screening) => screening.room)));
};
