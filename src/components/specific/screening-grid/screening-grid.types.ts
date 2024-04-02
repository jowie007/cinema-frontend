import { BasicScreening, Film } from "../../../openapi/requests";

export type ScreeningGridProps = {
  screenings: BasicScreening[];
  films: Film[];
};
