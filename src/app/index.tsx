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

import Photo from "./components/Photo";
import PasswordGenerator from "./components/Projects/PasswordGenerator";

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

    <View>
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
      <PasswordGenerator />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     gap: 56,
//   },
// });

export default index;
