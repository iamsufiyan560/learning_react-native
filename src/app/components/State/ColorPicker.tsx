import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F333FF",
  "#e4dbc6",
  "#d4c6e4",
  "#ffefa3",
  "#f36013",
  "#77e9ed",
  "#99f8dd",
  "#0a5fb5",
  "#6c7f27",
  "#0497b3",
  "#01ed09",
  "#081973",
];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}>Pick a Color</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.colorsContainer}
      >
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              color === selectedColor && styles.selectedBox,
            ]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </ScrollView>

      <View
        style={{
          margin: 8,

          backgroundColor: selectedColor,
          height: 400,
          width: 300,
          borderColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 8,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorsContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },

  selectedBox: {
    borderColor: "#000", // Border color for the selected item
    borderWidth: 3,
    borderRadius: 100, // Increased border radius for selected item
  },
});

export default ColorPicker;
