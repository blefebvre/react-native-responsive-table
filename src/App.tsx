/**
 * React Native responsive table demo - @brucelefebvre
 */

import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { data, head } from "./data/sample-table-data";

interface Props {}

export const App: React.FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Responsive table demo</Text>
      <Table>
        <Row data={head} />
        {data.map((entry, index) => (
          <Row key={index} data={entry} />
        ))}
      </Table>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    color: "#000000"
  },
  header: {
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 10
  }
});
