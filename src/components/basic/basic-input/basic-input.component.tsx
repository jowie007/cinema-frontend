import { TextField } from "@mui/material";
import { KeyboardEvent, useState } from "react";
import "./basic-input.styles.scss";
import { BasicInputProps } from "./basic-input.types";

export function BasicInput({
  title,
  placeholder,
  value,
  onChange,
  onEnter,
}: BasicInputProps) {
  const [currentValue, setCurrentValue] = useState(value || "");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && currentValue !== undefined) {
      onEnter?.(currentValue);
    }
  };

  return (
    <TextField
      title={title}
      placeholder={placeholder}
      value={currentValue}
      onChange={(e) => {
        setCurrentValue(e.target.value);
        onChange?.(e.target.value);
      }}
      onKeyDown={handleKeyDown}
    >
      Hello world
    </TextField>
  );
}
