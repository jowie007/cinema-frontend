import { useMemo, useState } from "react";
import { useScreeningControllerServiceFindAll } from "../../../openapi/queries";
import {
  filmsWithScreeningsToScreeningsWithFilm,
  getRoomsFromScreenings,
} from "../../../utils/mappers";
import { PageLayout } from "../../layout/page-layout";
import { ScreeningGrid } from "../../specific/screening-grid";
import "./home-page.styles.scss";
import { BasicDatePicker } from "../../basic/basic-date-picker";
import { useDate } from "../../../hooks/use-date";

export function HomePage() {
  const [activeDate, setActiveDate] = useState(new Date());
  const { getDateWithoutTime } = useDate();

  const { data: filmWithScreenings } = useScreeningControllerServiceFindAll({
    date: getDateWithoutTime(activeDate) ?? undefined,
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
      <div className="homePage">
        <BasicDatePicker onChange={(value) => setActiveDate(value)} />
        <div className="homePageRooms">
          {screeningsWithFilm &&
            screeningsWithFilm.length > 0 &&
            rooms &&
            rooms.map(
              (room, index) =>
                room !== undefined && (
                  <div className="homePageRoomsItem" key={index}>
                    <ScreeningGrid
                      key={index}
                      screenings={screeningsWithFilm}
                      room={room}
                    />
                  </div>
                )
            )}
        </div>
      </div>
    </PageLayout>
  );
}
