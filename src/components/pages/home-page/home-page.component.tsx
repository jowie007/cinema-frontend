import { useState } from "react";
import { useDate } from "../../../hooks/use-date";
import { useRoomControllerServiceFindAll } from "../../../openapi/queries";
import { BasicDatePicker } from "../../basic/basic-date-picker";
import { PageLayout } from "../../layout/page-layout";
import { FilmCarousel } from "../../specific/film-carousel";
import { ScreeningCarousel } from "../../specific/screening-carousel/screening-carousel.component";
import "./home-page.styles.scss";
import { BasicSpinner } from "../../basic/basic-spinner";

export function HomePage() {
  const [activeDate, setActiveDate] = useState(new Date());
  const { getDateWithoutTime, getDateWithWeekday } = useDate();

  const { data: roomsWithFilmsAndScreenings, isFetching } =
    useRoomControllerServiceFindAll({
      date: getDateWithoutTime(activeDate) ?? undefined,
    });

  // TODO Error handling
  return (
    <PageLayout>
      <div className="homePage">
        <FilmCarousel />
        <div className="homePageDay">{getDateWithWeekday(activeDate)}</div>
        <BasicDatePicker onChange={(value) => setActiveDate(value)} />
        <div className="homePageRooms">
          {isFetching ? (
            <div className="homePageRoomsSpinner">
              <BasicSpinner />
            </div>
          ) : (
            <ScreeningCarousel
              roomsWithFilmsAndScreenings={roomsWithFilmsAndScreenings}
            />
          )}
        </div>
      </div>
    </PageLayout>
  );
}
