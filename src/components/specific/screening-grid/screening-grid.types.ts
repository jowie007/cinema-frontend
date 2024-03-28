import { Screening } from "../../../openapi/requests";

export type ScreeningGridProps = {
  screenings: Screening[];
  room: number;
};
