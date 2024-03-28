import { Paper } from "@mui/material";
import { ScreeningGridProps } from ".";
import { BasicGrid } from "../../basic/basic-grid/basic-grid.component";
import "./screening-grid.styles.scss";

export function ScreeningGrid({ screening }: ScreeningGridProps) {
  return (
    <BasicGrid isContainer direction="column">
      <BasicGrid isItem size={12}>
        <Paper>{screening.film?.name}</Paper>
      </BasicGrid>
    </BasicGrid>
  );
}
