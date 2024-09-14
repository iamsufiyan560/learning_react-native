import { View, Text, FlatList } from "react-native";
import React from "react";

interface ChildProps {
  name: string;
  age: number;
  hobbies: string[];
}

// const ChildComponent = (props: ChildProps) => {
//   return (
//     <View>
//       <Text>Child Component</Text>
//       <Text>{props.name} </Text>
//       <Text>{props.age} </Text>
//       <Text>{props.hobbies} </Text>
//     </View>
//   );
// };

const ChildComponent = ({ name, age, hobbies }: ChildProps) => {
  return (
    <View>
      <Text>Child Component</Text>
      <Text>{name} </Text>
      <Text>{age} </Text>
      <FlatList
        data={hobbies}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ChildComponent;
