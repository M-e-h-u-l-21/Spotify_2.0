import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Bar from "./Bar";

const TopBar = () => {
  return (
    <View className="flex-row space-x-2 items-center">
      <TouchableOpacity className="h-50 w-50">
        <Image
          source={require("../../assets/images/whymona.png")}
          resizeMethod="scale"
          resizeMode="contain"
          className="rounded-full"
        />
      </TouchableOpacity>
      <View>
        <Bar text="All" isSelected={true} />
      </View>
      <View>
        <Bar text="Music" />
      </View>
      <View>
        <Bar text="Podcast & Shows" />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
