import { ScreeningGridProps } from ".";
import { ScreeningGridItem } from "../screening-grid-item";
import "./screening-grid.styles.scss";

export function ScreeningGrid({ room, screenings, films }: ScreeningGridProps) {
  return (
    <div className="screeningGrid">
      <div className="screeningGridTitle">{room.name}</div>
      <div className="screeningGridContent">
        <div className="screeningGridContentBackground" />
        <div className="screeningGridContentTimeline">
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className="screeningGridContentTimelineItem">
              {i}
            </div>
          ))}
        </div>
        {screenings.map((screening, index) => (
          <ScreeningGridItem
            key={index}
            screening={screening}
            film={films.filter((film) => film.id === screening.filmId)[0]}
          />
        ))}
      </div>
    </div>
  );
}
