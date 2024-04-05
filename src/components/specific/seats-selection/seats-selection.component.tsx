import { SeatsSelectionProps } from ".";
import "./seats-selection.styles.scss";
import raw from "./mock-seats.txt";
import { useMemo, useState, useEffect, MouseEvent, useCallback } from "react";

export function SeatsSelection({ children }: SeatsSelectionProps) {
  const [seatsString, setSeatsString] = useState("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setSeatsString(text);
      });
  }, []);

  const handleSeatClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>, seatName: string) => {
      event.currentTarget.classList.toggle("seatTypeSeatSelected");
      const index = selectedSeats.indexOf(seatName);
      if (index === -1) {
        setSelectedSeats([...selectedSeats, seatName]);
      } else {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatName));
      }
    },
    [selectedSeats]
  );

  const seatElements = useMemo(() => {
    if (!seatsString) return null;

    const rows = seatsString.trim().split("\n");
    let storedChar = "";
    let currentRow = "";

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="seatsSelectionRow">
        {[...row].map((char, colIndex) => {
          let className = "seat seatType";
          let content = "";
          switch (char) {
            case "-":
              className += "Empty";
              break;
            case "*":
              className += "Screen";
              break;
            case "+":
              className += "Exit";
              break;
            case "&":
              className += "Love";
              break;
            case "'":
              return null;
            default:
              if (/^\d+$/.test(char)) {
                className += "Seat";
                if (storedChar === "") {
                  storedChar = char;
                } else {
                  const seatName = `${currentRow}${storedChar + char}`;
                  content = storedChar + char;
                  className += ` ${seatName}`;
                  storedChar = "";
                  return (
                    <button
                      key={colIndex}
                      className={className}
                      onClick={(e) => handleSeatClick(e, seatName)}
                    >
                      {content}
                    </button>
                  );
                }
              } else if (/^[a-zA-Z]$/.test(char)) {
                className += "Row";
                currentRow = char;
                content = char;
              } else {
                return null;
              }
              break;
          }
          if (storedChar !== "") {
            return null;
          }
          return (
            <div key={colIndex} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    ));
  }, [handleSeatClick, seatsString]);

  return (
    <div className="seatsSelection">
      {seatElements}
      <div>
        <h2>Selected Seats</h2>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}
