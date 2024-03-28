import { Button } from "@mui/material";
import "./basic-button.styles.scss";
import { BasicButtonProps } from "./basic-button.types";

export function BasicButton({ title, onClick }: BasicButtonProps) {
  return (
    <Button title={title} onClick={onClick} variant="contained">
      Hello world
    </Button>
  );
}
