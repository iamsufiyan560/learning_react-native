// PlayerInput.tsx
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface PlayerInputProps {
  handleSetPlayers: (player1: string, player2: string) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({ handleSetPlayers }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleSubmit = () => {
    if (player1 && player2) {
      handleSetPlayers(player1, player2);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Player 1 (O)"
        value={player1}
        onChangeText={setPlayer1}
      />
      <TextInput
        style={styles.input}
        placeholder="Player 2 (X)"
        value={player2}
        onChangeText={setPlayer2}
      />
      <Button title="Start Game" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",

    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PlayerInput;
