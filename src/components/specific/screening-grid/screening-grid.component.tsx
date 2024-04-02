import { ScreeningGridProps } from ".";
import { ScreeningGridItem } from "../screening-grid-item";
import "./screening-grid.styles.scss";

export function ScreeningGrid({ screenings, room }: ScreeningGridProps) {
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
      {screenings
        .filter((screening) => screening.room === room)
        .map((screening, index) => (
          <ScreeningGridItem key={index} screening={screening} />
        ))}
    </div>
  );
}
