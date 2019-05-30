/**
 * React Native responsive table demo - @brucelefebvre
 */
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { StockTableResponsive } from "./components/StockTableResponsive";

interface Props {}

// The App component was left as a class component to enable HMR. This is needed
// due to this open issue: https://github.com/facebook/react-native/issues/10991
export class App extends React.Component {
  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Responsive table demo</Text>
        <StockTableResponsive />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    color: "#000000"
  },
  header: {
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5
  }
});
