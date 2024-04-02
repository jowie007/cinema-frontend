import { Label } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { BasicDatePickerProps } from ".";
import "./basic-date-picker.styles.scss";
import dayjs, { Dayjs } from "dayjs";

export function BasicDatePicker({ label, onChange }: BasicDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleChange = (newSelectedDate: Dayjs | null) => {
    // TODO Error handling
    if (!newSelectedDate) {
      return;
    }
    setSelectedDate(newSelectedDate);
    onChange(newSelectedDate.toDate());
  };

  return (
    <>
      {label && <Label>{label}</Label>}
      <DatePicker
        value={selectedDate}
        onChange={(value) => handleChange(value)}
      />
    </>
  );
}
