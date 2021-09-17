import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSrc={require("../../assets/forest.jpg")}
        imageScore="9"
      />
      <ImageDetail
        title="Beach"
        imageSrc={require("../../assets/beach.jpg")}
        imageScore="90"
      />
      <ImageDetail
        title="Mountain"
        imageSrc={require("../../assets/mountain.jpg")}
        imageScore="0"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
