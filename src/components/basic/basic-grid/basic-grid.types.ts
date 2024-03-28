import { GridDirection } from "@mui/material";

export type BasicGridProps = {
  isContainer?: boolean;
  isItem?: boolean;
  spacing?: number;
  direction?: GridDirection;
  size?: number;
  children: React.ReactNode;
};
