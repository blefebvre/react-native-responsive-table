import { useScreenDimensions } from "./useScreenDimensions";

export enum Breakpoint {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

// Determine if the current screen width should match the Small, Medium, or Large breakpoint.
export function useBreakpoint(): Breakpoint {
  const { width } = useScreenDimensions();
  console.log(`Determining device breakpoint for width: ${width}`);

  if (width < 500) {
    console.log(`= Breakpoint.SMALL`);
    return Breakpoint.SMALL;
  } else if (width >= 500 && width < 1000) {
    console.log(`= Breakpoint.MEDIUM`);
    return Breakpoint.MEDIUM;
  } else {
    console.log(`= Breakpoint.LARGE`);
    return Breakpoint.LARGE;
  }
}
