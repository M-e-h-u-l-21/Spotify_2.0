import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Bar = ({ text, isSelected }) => {
  return (
    <>
      {isSelected ? (
        <TouchableOpacity>
          <View className="bg-[#22d460] rounded-full">
            <Text className="color-black py-3 px-6 text-l">{text}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <View className="bg-[#2a2a2a] rounded-full">
            <Text className="color-white py-3 px-6 text-l">{text}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Bar;

const styles = StyleSheet.create({});
