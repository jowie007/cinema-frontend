import { SeatSelectionProps } from ".";
import "./seat-selection.styles.scss";

export function SeatSelection({ children }: SeatSelectionProps) {
  // TODO Load seats
  return <div className="seatSelection">{children}</div>;
}
