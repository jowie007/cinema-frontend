import { Paper } from "@mui/material";
import { BasicGridItemProps } from ".";
import "./basic-grid-item.styles.scss";

export function BasicGridItem({ children }: BasicGridItemProps) {
  return <Paper>{children}</Paper>;
}
