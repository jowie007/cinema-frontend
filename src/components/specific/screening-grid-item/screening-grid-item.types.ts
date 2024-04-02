import { BasicScreening, Film } from "../../../openapi/requests";

export type ScreeningGridItemProps = {
  screening: BasicScreening;
  film: Film;
};
