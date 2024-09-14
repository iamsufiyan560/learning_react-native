import { View, Text } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <Text>ParentComponent</Text>
      <ChildComponent
        name="sufiyan"
        age={22}
        hobbies={["Singing", "Coding", "Cooking"]}
      />
    </View>
  );
};

export default ParentComponent;
