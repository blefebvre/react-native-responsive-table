import React from "react";
import { Table, Row } from "react-native-table-component";
import { StyleSheet } from "react-native";
import { reduceDataForScreenSize } from "../responsive/reduceDataForScreenSize";
import { RotationHint } from "./RotationHint";
import { useBreakpoint } from "../hooks/useBreakpoint";

// Table header items
const head = [
  "Ticker",
  "Quantity",
  "Avg. Cost",
  "Total Cost",
  "Price",
  "Market Value"
];

// Table data rows
const data = [
  ["ADBE", "4", "$270.45", "$1,081.80", "$278.25", "$1,113.00"],
  ["AAPL", "9", "$180.18", "$1,621.62", "$178.35", "$1,605.15"],
  ["GOOGL", "3", "$1,023.58", "$3,070.74", "$1,119.94", "$3,359.82"],
  ["AIR", "10", "$113.12", "$1,131.20", "$116.64", "$1,166.40"],
  ["MSFT", "6", "$129.89", "$779.34", "$126.18", "$757.08"]
];

// Indices (columns) to include on a small screen
export const smallScreenIndices = [0, 1, 5];

// Indices to include on a medium screen
export const mediumScreenIndices = [0, 1, 2, 4, 5];

// All indices will be included on a large screen

interface Props {}

// Component for displaying a table of stock data in a responsive manner.
export const StockTableResponsive: React.FunctionComponent<Props> = props => {
  // Get the current breakpoint from our hook
  const breakpoint = useBreakpoint();

  return (
    <>
      <Table borderStyle={styles.border} style={styles.table}>
        {/* Header row */}
        <Row
          data={reduceDataForScreenSize(
            head,
            breakpoint,
            smallScreenIndices,
            mediumScreenIndices
          )}
          style={styles.head}
          textStyle={styles.text}
        />

        {/* Data rows */}
        {data.map((entry, index) => (
          <Row
            key={index}
            data={reduceDataForScreenSize(
              entry,
              breakpoint,
              smallScreenIndices,
              mediumScreenIndices
            )}
            style={styles.dataRow}
            textStyle={styles.text}
          />
        ))}
      </Table>
      <RotationHint />
    </>
  );
};

const styles = StyleSheet.create({
  text: { textAlign: "center" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  dataRow: { height: 30 },
  border: { borderWidth: 0.5, borderColor: "#c8e1ff" },
  table: { marginTop: 10, marginBottom: 10 }
});
