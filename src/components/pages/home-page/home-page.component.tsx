import { useState } from "react";
import { useDate } from "../../../hooks/use-date";
import { useRoomControllerServiceFindAll } from "../../../openapi/queries";
import { BasicDatePicker } from "../../basic/basic-date-picker";
import { PageLayout } from "../../layout/page-layout";
import { ScreeningGrid } from "../../specific/screening-grid";
import "./home-page.styles.scss";

export function HomePage() {
  const [activeDate, setActiveDate] = useState(new Date());
  const { getDateWithoutTime } = useDate();

  const { data: roomsWithFilmsAndScreenings } = useRoomControllerServiceFindAll(
    {
      date: getDateWithoutTime(activeDate) ?? undefined,
    }
  );

  // TODO Error handling
  return (
    <PageLayout>
      <div className="homePage">
        <BasicDatePicker onChange={(value) => setActiveDate(value)} />
        <div className="homePageRooms">
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
                      screenings={roomWithScreenings.basicScreenings}
                      films={roomsWithFilmsAndScreenings.films}
                    />
                  </div>
                )
            )}
        </div>
      </div>
    </PageLayout>
  );
}
