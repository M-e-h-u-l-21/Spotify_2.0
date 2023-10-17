import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bar from "../components/Bar";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-black pt-20">
      <View className="flex-row px-6 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          height={40}
          width={40}
        />
        <Bar text="All" />
        <Bar text="Music" />
        {/* <Bar text="Podcasts & Shows"/> */}
      </View>
    </View>
  );
};

export default HomeScreen;

