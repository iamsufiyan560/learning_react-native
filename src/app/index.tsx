import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CarComponent from "./components/CarComponent";
import ListData from "./components/FlatList/ListData";
import ArrayOfObjects from "./components/FlatList/ArrayOfObjects";
import HugeList from "./components/FlatList/HugeList";
import ParentComponent from "./components/props/ParentComponent";
import ProductPsrent from "./components/props/ProductPsrent";
import ColorPicker from "./components/State/ColorPicker";
import TodoList from "./components/State/TodoList";
import DataFetching from "./components/useEffect/DataFetching";
import SeaFoodMeals from "./components/useEffect/SeaFoodMeals";
import RandomUserComponent from "./components/useEffect/RandomUser";

import PasswordGenerator from "./components/Projects/PasswordGenerator";
import App from "./components/Projects/App";

import DiceApp from "./components/Projects/Dice";
import CurrencyConverter from "./components/Projects/CurrencyConverter";
import TicTocToe from "./components/Projects/TicTocToe";
import Main from "./components/Projects/navigations/Main";
const index = () => {
  return (
    // <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 20 }}>
    //   <View style={styles.container}>
    //     <CarComponent />
    //     <CarComponent />
    //     <CarComponent />
    //     <CarComponent />
    //   </View>

    // </ScrollView>

    <View style={styles.container}>
      {/* <CarComponent /> */}
      {/* <ListData /> */}
      {/* <ArrayOfObjects /> */}
      {/* <HugeList /> */}
      {/* <ParentComponent /> */}
      {/* <ProductPsrent /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
      {/* <DataFetching /> */}
      {/* <RandomUserComponent /> */}
      {/* <SeaFoodMeals /> */}
      {/* <Photo /> */}
      {/* <PasswordGenerator /> */}
      {/* <App /> */}
      {/* <DiceApp /> */}
      {/* <CurrencyConverter />
       */}
      {/* <TicTocToe /> */}
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   display: "flex",
  //   gap: 56,
  // },
  container: {
    flex: 1, // Make sure the parent expands to fill the screen
  },
});

export default index;
