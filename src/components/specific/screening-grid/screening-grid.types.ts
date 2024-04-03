import { BasicScreening, Film, Room } from "../../../openapi/requests";

export type ScreeningGridProps = {
  room: Room;
  screenings: BasicScreening[];
  films: Film[];
};
