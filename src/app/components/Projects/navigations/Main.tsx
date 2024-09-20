import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import Details from "./Details";

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Trending Products",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Product Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
