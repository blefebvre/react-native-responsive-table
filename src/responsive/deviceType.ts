export const BREAKPOINT = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

// Determine if the given screen width should match the Small, Medium, or Large breakpoint.
export function determineDeviceBreakpoint(width: number) {
  if (width < 500) {
    return BREAKPOINT.SMALL;
  } else if (width >= 500 && width < 1000) {
    return BREAKPOINT.MEDIUM;
  } else {
    return BREAKPOINT.LARGE;
  }
}
