import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Snackbar } from "react-native-paper";
import Icons from "./Icons";
import PlayerInput from "./PlayerInput";
const TicTocToe = () => {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [gameState, setGameState] = useState(new Array(9).fill("empty", 0, 9));
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [gameStarted, setGameStarted] = useState(false);

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner("");
    setGameState(new Array(9).fill("empty", 0, 9));
  };

  const checkIsWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (
        gameState[a] !== "empty" &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        const winner = gameState[a] === "cross" ? player2 : player1;
        setGameWinner(`${winner} won the game! 🥳`);
        return;
      }
    }

    if (!gameState.includes("empty", 0)) {
      setGameWinner("Draw game... ⌛️");
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      setSnackbarVisible(true);
      setSnackbarMessage("gameWinner");
      return;
    }

    if (gameState[itemNumber] === "empty") {
      gameState[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      setSnackbarVisible(true);
      setSnackbarMessage("Position is already filled");
      return;
    }

    checkIsWinner();
  };

  const handleSetPlayers = (name1: string, name2: string) => {
    setPlayer1(name1);
    setPlayer2(name2);
    setGameStarted(true);
  };

  const ChangePlayerNames = () => {
    setGameStarted(false);
  };

  return (
    <SafeAreaView>
      <StatusBar />
      {!gameStarted ? (
        <PlayerInput handleSetPlayers={handleSetPlayers} />
      ) : (
        <>
          {gameWinner ? (
            <View style={[styles.playerInfo, styles.winnerInfo]}>
              <Text style={styles.winnerTxt}>{gameWinner}</Text>
            </View>
          ) : (
            <View
              style={[
                styles.playerInfo,
                isCross ? styles.playerX : styles.playerO,
              ]}
            >
              <Text style={styles.gameTurnTxt}>
                Player {isCross ? player2 : player1}'s Turn
              </Text>
            </View>
          )}
          <FlatList
            numColumns={3}
            data={gameState}
            style={styles.grid}
            renderItem={({ item, index }) => (
              <Pressable
                key={index}
                style={styles.card}
                onPress={() => onChangeItem(index)}
              >
                <Icons name={item} />
              </Pressable>
            )}
          />
          <Pressable style={styles.gameBtn} onPress={reloadGame}>
            <Text style={styles.gameBtnText}>
              {gameWinner ? "Start new game" : "Reload the game"}
            </Text>
          </Pressable>

          <Pressable
            style={[
              {
                marginVertical: 10,
                backgroundColor: "#F7CD2E",
                alignItems: "center",

                padding: 10,
                borderRadius: 8,
                marginHorizontal: 36,
              },
            ]}
            onPress={ChangePlayerNames}
          >
            <Text style={{ fontSize: 18, color: "#000000", fontWeight: "500" }}>
              Change the Player Names
            </Text>
          </Pressable>
          <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            duration={Snackbar.DURATION_SHORT}
          >
            {snackbarMessage}
          </Snackbar>
        </>
      )}
    </SafeAreaView>
  );
};

export default TicTocToe;

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  playerX: {
    backgroundColor: "#38CC77",
  },
  playerO: {
    backgroundColor: "#F7CD2E",
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: "33.33%",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#333",
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: "#38CC77",

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  gameBtn: {
    alignItems: "center",

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: "#8D3DAF",
  },
  gameBtnText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
