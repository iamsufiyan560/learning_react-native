import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPramList } from "./HomeScreen";

import ProductItem from "./ProductItem";
import Separator from "./Separator";

// data
import { PRODUCTS_LIST } from "./data/constnats";

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_LIST}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Details", { productId: item.id });
            }}
          >
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",

    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },
});
