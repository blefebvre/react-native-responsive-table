import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";

interface Props {
  showWhenScreenWidthLessThan?: number;
  text?: string;
}

// Show a hint indicating that additional data can be revealed by rotating.
export const RotationHint: React.FunctionComponent<Props> = ({
  showWhenScreenWidthLessThan = 500,
  text = "Rotate device for more columns ⤵"
}) => {
  // Get the current screen dimensions
  const { width, height } = Dimensions.get("screen");
  const isAlreadyInLandscape: boolean = width > height;

  // Only show when the width is less than the provided threshold, and the user
  // is not already viewing the app in landscape mode.
  const showMessage =
    width < showWhenScreenWidthLessThan && isAlreadyInLandscape === false;

  if (showMessage) {
    return (
      <View>
        <Text style={styles.message}>{text}</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    margin: 10
  }
});
