import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import images from "../../assets/imageArray";

const { width: screenWidth } = Dimensions.get("window");

type CarouselItemProps = {
  item: any;
};

const Photo = () => {
  const renderItem = ({ item }: CarouselItemProps) => (
    <View style={styles.imageContainer}>
      <Image
        source={require("../../assets/images/a.png")}
        style={styles.image}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={300}
        layout={"default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
});

export default Photo;
