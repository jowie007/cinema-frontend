import { ScreeningGridItemProps } from ".";
import { useDate } from "../../../hooks/use-date";
import "./screening-grid-item.styles.scss";

const minutesToRem = (minutes: number) => `${(minutes * 2.5) / 60}rem`;

const getOffsetTop = (date: string | undefined) => {
  // TODO Error handling
  if (!date) return 0;
  const dateObj = new Date(date);
  const minutes = dateObj.getHours() * 60 + dateObj.getMinutes();
  return minutesToRem(minutes);
};

const getHeigth = (length: number | undefined) => {
  // TODO Error handling
  if (!length) return 0;
  return minutesToRem(length);
};

export function ScreeningGridItem({ screening }: ScreeningGridItemProps) {
  const { getFormattedTime } = useDate();
  return (
    <>
      <div
        className="screeningGridItem"
        style={{
          top: getOffsetTop(screening.date),
          height: getHeigth(screening.film?.length),
        }}
      >
        <div className="screeningGridItemName">{screening.film?.name}</div>
        <div className="screeningGridItemTime">
          {getFormattedTime(screening?.date)}
        </div>
      </div>
    </>
  );
}
