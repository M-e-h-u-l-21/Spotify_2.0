import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import PickedTemplate from "../HomeScreen/PickedTemplate";

const SearchBar = () => {
  return (
    <View className="h-14 m-6 bg-white  rounded-md">
      <View className="flex-row p-4 space-x-4">
        <Image
          source={require("../../assets/icons/SearchInverted.png")}
          className="h-6 w-6"
        />
        <Text
          className="font-semibold color-[#5a5a5a]"
          style={{ fontSize: 18 }}
        >
          What do you want to listen to?
        </Text>
      </View>
      <View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
