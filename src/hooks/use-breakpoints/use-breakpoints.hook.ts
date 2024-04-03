import { useMediaQuery } from "@mui/material";
import { Breakpoints } from "./use-breakpoints.types";

export function useBreakpoints() {
  const useIsBreakpoint = (breakpointMin: Breakpoints) => {
    const query = `(min-width: ${breakpointMin}px)`;
    return useMediaQuery(query);
  };

  const useGetCurrentBreakpoint = () => {
    const isMobileLandscape = useIsBreakpoint(Breakpoints.mobileLandscape);
    const isTablet = useIsBreakpoint(Breakpoints.tablet);
    const isDesktop = useIsBreakpoint(Breakpoints.desktop);

    // Order matters
    // Start with the largest breakpoint
    if (isDesktop) return Breakpoints.desktop;
    if (isTablet) return Breakpoints.tablet;
    if (isMobileLandscape) return Breakpoints.mobileLandscape;
    return null;
  };

  return { useIsBreakpoint, useGetCurrentBreakpoint };
}
