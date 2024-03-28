import { GridDirection } from "@mui/material";

export type BasicGridProps = {
  isContainer?: boolean;
  spacing?: number;
  direction?: GridDirection;
  size?: number;
  children: React.ReactNode;
};
