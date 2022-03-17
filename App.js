import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Culp from "./src/components/Culp";
import SpinWheel from "./src/components/SpinWheel";

export default function App() {
  const [winnerValue, setWinnerValue] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const started = useState(false);
  // const childRef = useRef(null);

  const participants = [
    "%10",
    "%20",
    "%30",
    "%40",
    "%50",
    "%60",
    "%70",
    "%90",
    "FREE",
  ];
  // const wheelOptions = {
  //   rewards: participants,
  //   knobSize: 50,
  //   borderWidth: 5,
  //   borderColor: "#000",
  //   innerRadius: 50,
  //   duration: 4000,
  //   backgroundColor: "transparent",
  //   textAngle: "horizontal",
  //   knobSource: require("./knob.png"),
  //   getWinner: (value, index) => {
  //     setWinnerIndex(index);
  //     setWinnerValue(value);
  //   },
  //   onRef: (ref) => (childRef = ref),
  // };
  return (
    <View style={styles.container}>
      <SpinWheel />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
