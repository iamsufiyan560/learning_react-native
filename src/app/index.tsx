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
      {/* <ListData /> */}
      {/* <ArrayOfObjects /> */}
      {/* <HugeList /> */}
      {/* <ParentComponent /> */}
      {/* <ProductPsrent /> */}
      {/* <ColorPicker /> */}
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 56,
  },
});

export default index;
