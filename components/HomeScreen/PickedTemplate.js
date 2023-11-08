import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import React from "react";
import PickedCard from "./PickedCard";

const PickedTemplate = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <View className="p-3">
          <Text className="color-white text-2xl font-bold">Picked For You</Text>
        </View>
        <TouchableOpacity>
          <EllipsisVerticalIcon size={32} color="#aaaaaa" />
        </TouchableOpacity>
      </View>
      <PickedCard />
    </View>
  );
};

export default PickedTemplate;

const styles = StyleSheet.create({});
