import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];

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
      <View style={styles.colorsContainer}>
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
      </View>

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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
