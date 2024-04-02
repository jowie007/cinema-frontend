import { ScreeningGridItemProps } from ".";
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
  return (
    <>
      <div
        className="screeningGridItem"
        style={{
          top: getOffsetTop(screening.date),
          height: getHeigth(screening.film?.length),
        }}
      >
        <div>{screening.film?.name}</div>
        <div>{screening.film?.length}</div>
        <div>{screening?.date}</div>
      </div>
    </>
  );
}
