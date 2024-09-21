import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerExample = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const onValueChange = (itemValue: string) => {
    setSelectedLanguage(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a programming language:</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={onValueChange}
          style={styles.picker}
          mode="dropdown"
          // enabled={false}
          // prompt="Select your favorite language"
        >
          <Picker.Item label="Select your favorite language..." value="" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="javascript" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="C++" value="cpp" />
          <Picker.Item label="Swift" value="swift" />
          <Picker.Item label="Kotlin" value="kotlin" />
        </Picker>
      </View>

      {selectedLanguage && (
        <Text style={styles.selectedText}>
          You selected: {selectedLanguage.toUpperCase()}
        </Text>
      )}

      {/* Example of resetting picker value */}
      <Button title="Reset Picker" onPress={() => setSelectedLanguage("")} />
    </View>
  );
};

export default PickerExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  picker: {
    width: 250,
    height: 30,
    marginBottom: 20,
  },
  selectedText: {
    fontSize: 16,
    marginVertical: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc", // Change color as needed
    borderRadius: 5, // Optional: For rounded corners
    overflow: "hidden", // Ensures the border is visible with the picker
    width: 250,
    marginBottom: 32,
  },
});
