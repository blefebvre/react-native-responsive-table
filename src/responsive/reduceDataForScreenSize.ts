import { Breakpoint } from "../hooks/useBreakpoint";

// Reduce arrays for display on smaller screens based on the provided breakpoint.
export function reduceDataForScreenSize(
  data: any[],
  breakpoint: Breakpoint,
  smallBreakpointIndices: number[],
  mediumBreakpointIndices: number[]
) {
  switch (breakpoint) {
    case Breakpoint.SMALL:
      // Return only data in the smallBreakpointIndices
      return data.filter((_, i) => smallBreakpointIndices.indexOf(i) !== -1);
    case Breakpoint.MEDIUM:
      // Return only data in the mediumBreakpointIndices
      return data.filter((_, i) => mediumBreakpointIndices.indexOf(i) !== -1);
    default:
      // Don't filter the data at all
      return data;
  }
}
