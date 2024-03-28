import { Grid } from "@mui/material";
import "./basic-grid.styles.scss";
import { BasicGridProps } from "./basic-grid.types";

export function BasicGrid({
  isContainer,
  spacing,
  size,
  direction,
  children,
}: BasicGridProps) {
  return (
    <Grid
      container={isContainer}
      direction={direction}
      spacing={spacing}
      xs={size}
      width={120}
    >
      {children}
    </Grid>
  );
}
