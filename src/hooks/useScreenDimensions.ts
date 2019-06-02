import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

// Form that the prop to a Dimensions change event callback will take
interface DimensionsCallbackProp {
  screen: { width: number; height: number };
}

// A hook to return the current screen dimensions
export function useScreenDimensions(): { width: number; height: number } {
  // Get initial dimensions and initialize state
  const initialDimensions = Dimensions.get("screen");
  const [width, setWidth] = useState(initialDimensions.width);
  const [height, setHeight] = useState(initialDimensions.height);

  useEffect(() => {
    const handleChange = ({ screen }: DimensionsCallbackProp) => {
      setWidth(screen.width);
      setHeight(screen.height);
    };

    // Listen for dimension changes, which typically indicate a rotation
    Dimensions.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      Dimensions.removeEventListener("change", handleChange);
    };
  });

  return { width, height };
}
