import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileImage from "./ProfileImage";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const TopBar = () => {
  return (
    <View className="ml-6 mb-4 mr-6 flex-row items-center justify-between">
      <View className="flex-row  items-center space-x-6">
        <ProfileImage />
        <Text className="color-white text-2xl font-semibold">Search</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/CameraIcon.png")}
            className="w-7 h-7"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
