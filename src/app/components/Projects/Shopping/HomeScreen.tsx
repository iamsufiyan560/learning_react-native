import React from "react";

import Home from "./Home";
import Details from "./Details";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackPramList = {
  Home: undefined;
  Details: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackPramList>();

const HomeScreen = () => {
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
            title: "Product details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
