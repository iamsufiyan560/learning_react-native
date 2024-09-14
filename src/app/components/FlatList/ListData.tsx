import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = ["a", "b", "c", "a", "b", "c"];

  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListData;
