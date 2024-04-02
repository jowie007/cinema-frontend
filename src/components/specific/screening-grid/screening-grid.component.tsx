import { ScreeningGridProps } from ".";
import { ScreeningGridItem } from "../screening-grid-item";
import "./screening-grid.styles.scss";

export function ScreeningGrid({ screenings, films }: ScreeningGridProps) {
  // TODO Adjust for the new data format
  return (
    <div className="screeningGrid">
      <div className="screeningGridBackground" />
      <div className="screeningGridTimeline">
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} className="screeningGridTimelineItem">
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
  );
}
