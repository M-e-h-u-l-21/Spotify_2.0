import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PickedCard = () => {
  return (
    <TouchableOpacity className="bg-[#242424] m-3 rounded-xl overflow-hidden">
      <View className="flex-row space-x-5">
        <View className="bg-white h-44 w-40"/>
        <View className="h-44 pt-6">
          <Text className="color-[#aaaaaa] text-[17px]">Episode . Dec 23</Text>
          <Text className="color-white font-semibold text-[17px]">Listen to Your</Text>
          <Text className="color-white font-semibold text-[17px]">favourite creators</Text>
          <Text className="color-white font-semibold text-[17px]">ki kahaniyan with</Text>
          <Text className="color-white font-semibold text-[17px]">Mehul.</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PickedCard;

const styles = StyleSheet.create({});
