import { useMemo } from "react";
import { useScreeningControllerServiceFindAll } from "../../../openapi/queries";
import {
  filmsWithScreeningsToScreeningsWithFilm,
  getRoomsFromScreenings,
} from "../../../utils/mappers";
import { BasicButton } from "../../basic/basic-button";
import { BasicInput } from "../../basic/basic-input";
import { PageLayout } from "../../layout/page-layout";
import { ScreeningGrid } from "../../specific/screening-grid";

export function HomePage() {
  const { data: filmWithScreenings } = useScreeningControllerServiceFindAll({
    // Today as YYYY-MM-DD
    date: new Date().toISOString().split("T")[0],
  });

  const screeningsWithFilm = useMemo(
    () =>
      filmWithScreenings &&
      filmsWithScreeningsToScreeningsWithFilm(filmWithScreenings),
    [filmWithScreenings]
  );

  const rooms = useMemo(
    () => screeningsWithFilm && getRoomsFromScreenings(screeningsWithFilm),
    [screeningsWithFilm]
  );

  return (
    <PageLayout>
      <BasicButton title="Hello world" />
      <BasicInput title="Hello world" />
      <div style={{ display: "flex" }}>
        {screeningsWithFilm &&
          screeningsWithFilm.length > 0 &&
          rooms &&
          rooms.map(
            (room, index) =>
              room !== undefined && (
                <ScreeningGrid
                  key={index}
                  screenings={screeningsWithFilm}
                  room={room}
                />
              )
          )}
      </div>
    </PageLayout>
  );
}
