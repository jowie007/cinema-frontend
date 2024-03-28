import { Grid } from "@mui/material";
import "./basic-grid.styles.scss";
import { BasicGridProps } from "./basic-grid.types";

export function BasicGrid({
  isContainer,
  isItem,
  spacing,
  size,
  direction,
  children,
}: BasicGridProps) {
  return (
    <Grid
      container={isContainer}
      item={isItem}
      direction={direction}
      spacing={spacing}
      xs={size}
    >
      {children}
    </Grid>
  );
}
