import { View, Text, Image, Button, Alert } from "react-native";

const CarComponent = () => {
  const price = 2000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carRatings = 3.5;
  const carDescription = "Here is some random car description";

  const showNotification = () => {
    Alert.alert("Notification", "Item added to cart successfully!");
  };

  return (
    <View
      style={{
        gap: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/image.jpg")}
        style={{ width: imageWidth, height: imageHeight, borderRadius: 150 }}
      />
      <Text>{carName}</Text>
      <Text>{carRatings}</Text>
      <Text>{carDescription}</Text>
      <Text>{price}</Text>
      <Button title="Add to cart" onPress={showNotification} />
    </View>
  );
};

export default CarComponent;
